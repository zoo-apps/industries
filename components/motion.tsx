'use client'

/**
 * `M` — an animated Box.
 *
 * `motion.div` renders a raw host element, so class notation on it reaches the
 * document verbatim and means nothing: no engine generates those rules now.
 * Box is what reads the notation, so an animated element has to BE a Box.
 * `motion.create` wraps it once, here, and every animated element in the site
 * is this one component with a `tag`.
 *
 *   <M className="grid gap-4">            // a div
 *   <M tag="h2" className="text-2xl">     // a heading, still animated
 *   <M tag="a" href="/x">                 // an anchor, href typed
 *
 * `motion.create` takes a concrete component, which erases Box's element
 * parameter — and with it `href`, `type`, and every other per-element prop.
 * The two casts hand it a Box fixed at "some element" and then re-open the
 * parameter on the result, so `tag="a"` still admits an `href` and `tag="div"`
 * still refuses one.
 */
import { motion, type MotionProps } from 'framer-motion'
import { Box, type BoxProps } from '@hanzo/ui'
import type { JSX, Ref } from 'react'

type Element = keyof JSX.IntrinsicElements

const Animated = motion.create(
  Box as (props: BoxProps<Element> & { ref?: Ref<any> }) => JSX.Element,
)

export const M = Animated as unknown as <T extends Element = 'div'>(
  props: BoxProps<T> & MotionProps & { ref?: Ref<any> },
) => JSX.Element
