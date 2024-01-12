"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import minusIcon from '@/src/assets/images/icon-minus.svg';
import plusIcon from '@/src/assets/images/icon-plus.svg'
import { useAutoAnimate } from '@formkit/auto-animate/react'


type Props = {
  isAccordianOpen?: boolean;
  question: string;
  answer: string;
}

const Accordion = (props: Props) => {
  const [isAccordianOpen, setAccordian] = useState(props.isAccordianOpen || false);
  const [animationParent] = useAutoAnimate()
  function toggleAccordian() {
    setAccordian(!isAccordianOpen);
  }
  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* q */}
      <p onClick={toggleAccordian} className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer">
        <span>{props.question}</span>
        {isAccordianOpen ?
          <Image src={minusIcon} alt="minus-icon" className="h-6 w-auto" /> :
          <Image src={plusIcon} alt="plus-icon" className="h-6 w-auto" />
        }
      </p>
      {isAccordianOpen && (<p className="text-sm sm:text-base text-gray-400">
        {props.answer}
      </p>)}
      {/* a */}

    </div>

  )
}

export default Accordion;