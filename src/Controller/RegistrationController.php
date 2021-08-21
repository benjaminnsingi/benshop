<?php

namespace App\Controller;

use App\Entity\Register;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
     private EntityManagerInterface $entityManager;
     private ValidatorInterface $validator;

     public function __construct(EntityManagerInterface $entityManager, ValidatorInterface $validator)
     {
         $this->entityManager = $entityManager;
         $this->validator = $validator;
     }

    /**
     * @Route("/register", name="app_register")
     * @param Request $request
     * @return Response
     */
     public function Register(Request $request): Response
     {
         $registration = new Register();

         $registration->setFirstname($request->request->get('firstname'));
         $registration->setLastname($request->request->get('lastname'));
         $registration->setEmail($request->request->get('email'));
         $registration->setPassword($request->request->get('password'));

         $firstnameError = $this->validator->validateProperty($registration, 'firstname');
         $lastnameError = $this->validator->validateProperty($registration, 'lastname');
         $emailError = $this->validator->validateProperty($registration, 'email');
         $passwordError = $this->validator->validateProperty($registration, 'password');
         $formErrors = [];

         if (count($firstnameError) > 0) {
             $formErrors['firstnameError'] = $firstnameError[0]->getMessage();
         }
         if (count($lastnameError) > 0) {
             $formErrors['lastnameError'] = $lastnameError[0]->getMessage();
         }
         if (count($emailError) > 0) {
             $formErrors['emailError'] = $emailError[0]->getMessage();
         }
         if (count($passwordError) > 0) {
             $formErrors['passwordError'] = $passwordError[0]->getMessage();
         }
         if ($formErrors) {
             return new JsonResponse($formErrors);
         }

        $user = new User();
        $user->setFirstname($registration->getFirstname());
        $user->setLastname($registration->getLastname());
        $user->setEmail($registration->getEmail());
        $user->setPassword($registration->getPassword());
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return new JsonResponse([
            'success_message' => 'Thank you for registering'
        ]);

     }
}