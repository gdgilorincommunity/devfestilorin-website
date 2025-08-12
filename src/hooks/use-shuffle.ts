import { useMemo } from 'react'

import { useIsMobile } from './use-mobile'

interface Tag {
  label: string
  color: string
}

export const shuffleTags = (tags: Tag[]): Tag[] => {
  const arr: Tag[] = [...tags]

  // Shuffle array (Fisher–Yates)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  // Avoid adjacent duplicates (label or color)
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].label === arr[i + 1].label ||
      arr[i].color === arr[i + 1].color
    ) {
      const swapIndex = arr.findIndex(
        (t: Tag, idx: number) =>
          idx > i + 1 &&
          t.label !== arr[i].label &&
          t.color !== arr[i].color &&
          arr[i + 1].label !== arr[idx - 1]?.label &&
          arr[i + 1].color !== arr[idx - 1]?.color,
      )

      if (swapIndex > -1)
        [arr[i + 1], arr[swapIndex]] = [arr[swapIndex], arr[i + 1]]
    }
  }

  return arr
}

export const useShuffledTagsOnMobile = (tags: Tag[]) => {
  const isMobile = useIsMobile()

  const shuffledTags = useMemo(() => {
    if (!isMobile) return tags

    return shuffleTags(tags)
  }, [tags, isMobile])

  return shuffledTags
}
