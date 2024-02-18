import React, { useState } from "react"

const Section = ({ title, description, isExpanded, setIsExpanded, id }) => {
  return (
    <div className='border border-black p-2 m-3'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p>
        {isExpanded ? description : `${description.substring(0, 60)} `}
        <br />
        <button
          onClick={() => {
            setIsExpanded(id)
            if (isExpanded) {
              setIsExpanded("")
            }
          }}
          className='text-blue-700 font-semibold'
        >
          {isExpanded ? "show less..." : "read more..."}
        </button>
      </p>
    </div>
  )
}

const Instamart = () => {
  const [isExpanded, setIsExpanded] = useState("")

  return (
    <div className='flex flex-col  justify-start'>
      <h1 className='text-3xl p-2 m-2 font-bold '>Instamart</h1>
      <Section
        isExpanded={isExpanded === "about" ? true : false}
        setIsExpanded={setIsExpanded}
        id={"about"}
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis incidunt debitis aspernatur itaque modi vitae reiciendis praesentium accusamus quae, distinctio nobis eius a odit suscipit doloribus qui cum quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing e lit. Impedit amet laboriosam dolore voluptate, earum autem atque optio sequi nihil, corrupti dicta eveniet in nulla, rerum dolorem deleniti molestiae odit magnam."
        }
      />

      <Section
        isExpanded={isExpanded === "team" ? true : false}
        setIsExpanded={setIsExpanded}
        id={"team"}
        title={"Teams"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis incidunt debitis aspernatur itaque modi vitae reiciendis praesentium accusamus quae, distinctio nobis eius a odit suscipit doloribus qui cum quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet laboriosam dolore voluptate, earum autem atque optio sequi nihil, corrupti dicta eveniet in nulla, rerum dolorem deleniti molestiae odit magnam."
        }
      />

      <Section
        isExpanded={isExpanded === "careers" ? true : false}
        setIsExpanded={setIsExpanded}
        id={"careers"}
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis incidunt debitis aspernatur itaque modi vitae reiciendis praesentium accusamus quae, distinctio nobis eius a odit suscipit doloribus qui cum quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet laboriosam dolore voluptate, earum autem atque optio sequi nihil, corrupti dicta eveniet in nulla, rerum dolorem deleniti molestiae odit magnam."
        }
      />
    </div>
  )
}

export default Instamart
