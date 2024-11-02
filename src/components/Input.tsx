import { useMotionTemplate, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '@/types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    area?: boolean
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required?: boolean
}

const Input = ({
    area = false,
    label,
    register,
    required = true,
    ...props
}: InputProps) => {

    const radius = 200;
    const [visible, setVisible] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>('');

    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setTheme(resolvedTheme as string);
    }, [resolvedTheme]);


    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div className='w-full h-auto flex flex-col gap-3'>
            <label
                className='text-text text-xl font-bold ml-1'
            >
                {props.placeholder}
            </label>
            <motion.div
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                      ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                      ${theme === 'dark' ? 'var(--white)' : 'var(--blue-500)'},
                      transparent 80%
                    )
                    `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300"
            >
                {area ? (
                    <textarea
                        className='w-full h-40 px-4 py-2 !mb-[-5px] rounded-lg focus:outline-text bg-input border border-border focus:border-primary text-text placeholder-text resize-none'
                        {...register(label, { required })}
                        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    ></textarea>
                ) : (

                    <input
                        className='w-full h-10 px-4 py-2 rounded-lg focus:outline-text bg-input border border-border focus:border-primary text-text placeholder-text'
                        {...register(label, { required })}
                        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    />
                )}
            </motion.div>
        </div>
    )
}

export default Input