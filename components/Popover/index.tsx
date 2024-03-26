import { useRef, useState } from "react"

type Popover = {
  complementText: string
  principalText: number
}

type AnchorElement = {
  height?: number | string
  left?: number | string
  top?: number | string
  width?: number | string
}

const Popover = (props: Popover) => {

  const [showPopover, setShowPopover] = useState(false)
  const [anchorElement, setAnchorElement] = useState<AnchorElement>()

  const buttonRef = useRef<HTMLButtonElement>(null)

  function handleVisibilityPopover() {
    setShowPopover(state => !state)
  }

  function getPositionElement() {
    if (!buttonRef.current) return;

    const {
      offsetHeight,
      offsetLeft,
      offsetTop,
      offsetWidth,
    } = buttonRef.current

    const calcTopPosition = `${(offsetTop - (offsetHeight - 16)) / 16}rem`
    const calcLeftPosition = `${(offsetLeft - offsetWidth) / 16}rem`

    setAnchorElement({
      width: offsetWidth,
      height: offsetHeight,
      left: calcLeftPosition,
      top: calcTopPosition
    })

    handleVisibilityPopover()
  }

  return (
    <>
      <button
        ref={buttonRef}
        onMouseOver={getPositionElement}
        onMouseLeave={handleVisibilityPopover}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {props.principalText}
      </button>

      <div
        style={{ top: anchorElement?.top, left: 'unset' }}
        className={`flex flex-col items-center absolute  ${showPopover ? 'visible' : 'invisible'} rounded-md bg-slate-800 border-[.0313rem] border-slate-600 p-1 w-48`}>

        <h1
          className="text-white">{props.complementText}</h1>
        <div
          className={`absolute z-10 top-[1.6rem] border-b-[1px] border-r-[1px] border-slate-600 rotate-45 bg-slate-800 w-3 h-3`}></div>
      </div>

    </>
  )
}

export default Popover;