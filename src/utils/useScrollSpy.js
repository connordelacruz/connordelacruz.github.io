// Based on https://gist.github.com/iDVB/a041da210605f05e0b36ac03ed403c00
import { useCallback, useEffect, useRef, useState } from 'react'
import useThrottledOnScroll from './useThrottledOnScroll'

const useScrollSpy = ({items = [], threshold = 200} = {}) => {
  const itemsWithNodeRef = useRef([])
  useEffect(() => {
    itemsWithNodeRef.current = getItemsClient(items)
  }, [items])

  const [activeState, setActiveState] = useState(null)

  const findActiveIndex = useCallback(() => {

    // Determine what section to consider active
    let active
    // If we're not near the bottom of the page, calculate currently active section normally
    if (
      document.documentElement.scrollHeight - document.documentElement.scrollTop >
      document.documentElement.clientHeight + threshold
    ) {
      // Iterate through items to determine which is active
      for (let i = itemsWithNodeRef.current.length - 1; i >= 0; i -= 1) {
        // No hash if we're near the top of the page
        if (document.documentElement.scrollTop < threshold) {
          active = {hash: null}
          break
        }

        const item = itemsWithNodeRef.current[i]

        // Dev: log error if section doesn't exist
        if (process.env.NODE_ENV !== 'production') {
          if (!item.node) {
            console.error(
              `Missing node on the item ${JSON.stringify(item, null, 2)}`
            )
          }
        }

        // If current item is visible, set it as the active one and break
        if (isItemVisible(item)) {
          active = item
          break
        }
      }
    }
    // Edge case: select the bottom-most item if we're close to the bottom of the page
    else {
      active = itemsWithNodeRef.current[itemsWithNodeRef.current.length - 1]
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash)
    }
  }, [activeState])

  useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166)

  return activeState
}

const getItemsClient = items =>
  items.map(({hash}) => ({hash, node: document.getElementById(hash)}))

const isItemVisible = item =>
  item.node &&
  item.node.offsetTop <
  document.documentElement.scrollTop +
  document.documentElement.clientHeight / 8

export default useScrollSpy