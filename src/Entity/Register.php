<?php

namespace App\Entity;
use Symfony\Component\Validator\Constraints as Assert;

class Register
{
    /**
     * @Assert\NotBlank(message="Firstname is required")
     * @Assert\Length(
     *     min = 2,
     *     minMessage="The Firstname should be at least 2 characters long",
     *     max = 6,
     *     maxMessage="The Firstname cannot be longer than 6 characters"
     * )
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z ]*$/",
     *     message="The Firstname should only have letters"
     * )
     */
    private string $firstname;

    /**
     * @Assert\NotBlank(message="Lastname is required")
     * @Assert\Length(
     *     min = 2,
     *     minMessage="The Lastname should be at least 2 characters long",
     *     max = 6,
     *     maxMessage="The Lastname cannot be longer than 6 characters"
     * )
     * @Assert\Regex(
     *     pattern="/^[a-zA-Z ]*$/",
     *     message="The Lastname should only have letters"
     * )
     */
    private string $lastname;

    /**
     * @Assert\NotBlank(message="Email address is required")
     * @Assert\Email(
     *   message="This email is not valid"
     * )
     */
    private string $email;

    private string $password;

    /**
     * @return string
     */
    public function getFirstname(): string
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     */
    public function setFirstname(string $firstname): void
    {
        $this->firstname = $firstname;
    }

    /**
     * @return string
     */
    public function getLastname(): string
    {
        return $this->lastname;
    }

    /**
     * @param string $lastname
     */
    public function setLastname(string $lastname): void
    {
        $this->lastname = $lastname;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

}
