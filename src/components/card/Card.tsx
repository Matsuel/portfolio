import { Projet } from '@/types';
import { motion } from 'framer-motion';

const Card = ({
    name,
    description,
    image,
    links,
    color,
}: Projet) => {


    return (
        <motion.div
            className="col-span-1 bg-white rounded-xl"
        >
            <div className="p-4">
                <div className='flex flex-row gap-4 items-center'>
                    <h4 className="text-4xl">
                        {name}
                    </h4>
                </div>
                <p className="text-base">{description}</p>
            </div>
            {links.android}
            {links.ios}
            {links.web}
            {links.github}
            {image}
            {color}
            {/* {image &&
                <Image
                className='w-full'
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                />
            } */}
        </motion.div>
    )
}

export default Card