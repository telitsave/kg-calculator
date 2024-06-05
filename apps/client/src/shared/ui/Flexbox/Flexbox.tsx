import { CSSProperties, ReactNode, forwardRef, memo, useMemo } from 'react'

interface Props {
  className?: string
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  flexWrap?: CSSProperties['flexWrap']
  flexDirection?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  flexBasis?: CSSProperties['flexBasis']
  flexGrow?: CSSProperties['flexGrow']
  style?: Omit<
    CSSProperties,
    'display' | 'alignItems' | 'justifyContent' | 'flexWrap' | 'flexDirection' | 'gap' | 'width'
  >
  children: ReactNode
}

const Flexbox = memo(
  forwardRef<HTMLDivElement, Props>(
    (
      {
        className,
        alignItems,
        gap,
        flexDirection,
        flexWrap,
        style = {},
        width,
        height,
        flexBasis,
        flexGrow,
        justifyContent,
        children,
      },
      ref,
    ) => {
      const styles = useMemo<CSSProperties>(
        () => ({
          ...style,
          display: 'flex',
          alignItems,
          justifyContent,
          flexWrap,
          flexDirection,
          flexGrow,
          gap,
          width,
          height,
          flexBasis,
        }),
        [alignItems, flexBasis, flexDirection, flexGrow, flexWrap, gap, height, justifyContent, style, width],
      )
      return (
        <div className={className} style={styles} ref={ref}>
          {children}
        </div>
      )
    },
  ),
)

export default Flexbox
