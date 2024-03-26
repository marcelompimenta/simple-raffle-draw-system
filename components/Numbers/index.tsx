"use client"
import Popover from "../Popover"

type Data = {
  number: number,
  name: string
}

const NumberComponent = (props: Data) => {

  return (
    <li className="flex flex-col w-[50] h-[50] p-2 items-center gap-2 text-black">
      <Popover
        key={props.number}
        {...{ principalText: props.number, complementText: props.name, }} />
    </li>
  )
}

export default NumberComponent;