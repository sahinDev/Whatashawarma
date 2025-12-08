import React, { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Controlled/Uncontrolled Hamburger button with morph animation.
 * Props:
 * - isOpen (optional): controlled open state
 * - onToggle (optional): callback(newState) when toggled
 *
 * If `isOpen` and `onToggle` are provided the component is controlled,
 * otherwise it manages local state.
 */
const HamburgerMenu = ({ isOpen: controlledOpen, onToggle }) => {
  const [localOpen, setLocalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined && typeof onToggle === 'function'
  const isOpen = isControlled ? controlledOpen : localOpen

  const toggle = () => {
    if (isControlled) onToggle(!controlledOpen)
    else setLocalOpen((v) => !v)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      style={{
        position: 'relative',
        zIndex: 50,
        width: 44,
        height: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }}
      className="mobile-hamburger-button"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        style={{ display: 'block', height: 3, width: 26, background: '#000', borderRadius: 2 }}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        style={{ display: 'block', height: 3, width: 26, background: '#000', borderRadius: 2 }}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        style={{ display: 'block', height: 3, width: 26, background: '#000', borderRadius: 2 }}
      />
    </button>
  )
}

export default HamburgerMenu
