import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import Button from "../ui/Button";
import FadeIn from "../ui/FadeIn";
import useMobile from "../../hooks/useMobile";

interface Data {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ThankYouMessage: React.FC = () => (
    <div className='thank-you'>
        <h2>Thank you!</h2>
        <p>
            Your message has been sent successfully. I will get back to you
            soon.
        </p>
    </div>
);

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<Data>({
        mode: "onBlur",
    });

    const [formDisabled, setFormDisabled] = useState(false);
    const [formSent, setFormSent] = useState(false);
    const isMobile = useMobile();

    const onSubmit = async (data: Data) => {
        const { name, email, subject, message } = data;
        try {
            setFormDisabled(true);

            const templateParams: Record<string, string> = {
                name,
                email,
                subject,
                message,
            };

            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY
            );
            setFormSent(true);
            reset();
        } catch (e) {
            console.error(e);
        } finally {
            setFormDisabled(false);
            reset();
        }
    };

    return formSent ? (
        <ThankYouMessage />
    ) : (
        <form
            id='contact-form'
            className={
                formDisabled
                    ? "pointer-events-none opacity-75"
                    : "pointer-events-auto"
            }
            onSubmit={handleSubmit(onSubmit)}>
            <div className='grid-cols-1 lg:grid-cols-4 lg:gap-x-4 mb-5'>
                <div className='input-wrapper lg:col-span-2'>
                    <FadeIn>
                        <label htmlFor='name'>Your name</label>
                        <input
                            type='text'
                            id='name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please enter your name",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Please use at least 3 characters",
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Please use 30 characters or less",
                                },
                            })}
                            placeholder='Name'></input>
                        {errors.name && (
                            <span className='error'>{errors.name.message}</span>
                        )}
                    </FadeIn>
                </div>

                <div className='input-wrapper lg:col-span-2 lg:col-start-3'>
                    <FadeIn delay={isMobile ? 0.2 : 0}>
                        <label htmlFor='name'>Your email</label>
                        <input
                            type='email'
                            id='email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Please enter an email",
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Email is not correct",
                                },
                            })}
                            placeholder='Email address'></input>
                        {errors.email && (
                            <span className='error'>
                                {errors.email.message}
                            </span>
                        )}
                    </FadeIn>
                </div>

                <div className='input-wrapper lg:col-span-3 lg:row-start-2'>
                    <FadeIn delay={isMobile ? 0.4 : 0.2}>
                        <label htmlFor='name'>Your subject</label>
                        <input
                            type='text'
                            id='subject'
                            {...register("subject", {
                                required: {
                                    value: true,
                                    message: "Please enter a subject",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Please use at least 3 characters",
                                },
                                maxLength: {
                                    value: 30,
                                    message:
                                        "Subject cannot exceed 30 characters",
                                },
                            })}
                            placeholder='Subject'></input>
                        {errors.subject && (
                            <span className='error'>
                                {errors.subject.message}
                            </span>
                        )}
                    </FadeIn>
                </div>

                <div className='textarea-wrapper lg:col-span-4 rlg:ow-start-3'>
                    <FadeIn delay={isMobile ? 0.6 : 0.4}>
                        <label htmlFor='name'>Say what is your topic</label>
                        <textarea
                            rows={3}
                            id='message'
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: "Please enter a message",
                                },
                                minLength: {
                                    value: 20,
                                    message:
                                        "Message has to be at least 20 characters",
                                },
                            })}
                            placeholder='Message'></textarea>
                        {errors.message && (
                            <span className='error'>
                                {errors.message.message}
                            </span>
                        )}
                    </FadeIn>
                </div>

                <div className='lg:row-start-4 lg:col-start-4 pt-3'>
                    <FadeIn delay={isMobile ? 0.8 : 0.6}>
                        <div>
                            <Button
                                text='send it'
                                type='submit'
                                disabled={!isValid || formDisabled}
                                align='justify-start'
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
