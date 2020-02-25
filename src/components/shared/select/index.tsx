import React, { useState } from 'react'
import styled, { StyledComponent } from 'styled-components'

import { FontSizes } from '../../../lib/style-guide'
import { classNames } from '../../../lib/classnames'
import { randomClassName } from '../../../lib/rcn'
import { FilterItems, CheckSelectorType } from './helper'
import logo from '../../../asserts/Bitmap.png'

const rcn = randomClassName()

interface SelectProps {
  defualtLabel?: string
  className?: string | undefined
  filter?: boolean
  items: Array<SelectitemProps>
  onChange: (e: SelectitemProps) => void
}

interface SelectitemProps {
  label: string
  smallLabel?: string
  image?: string
}

const Select: FC<Readonly<SelectProps>> = ({
  className,
  defualtLabel,
  filter,
  items,
  onChange
}: SelectProps) => {
  const [label, handleLable] = useState(defualtLabel || 'Select')
  const [showSlectItems, handleShowSlectItems] = useState(false)
  const [searchText, handleSearchText] = useState('')
  const gernaltype = CheckSelectorType(items)
  const filterItems = FilterItems(items, searchText)
  const toggleItems = () => handleShowSlectItems(!showSlectItems)
  const onChangeLable = (item: SelectitemProps) => {
    onChange(item)
    handleLable(item.label)
    toggleItems()
  }

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event) return
    handleSearchText(event.target.value)
  }

  return (
    <div className={className}>
      <label onClick={toggleItems}>{label}</label>
      {
        <div
          className={
            showSlectItems
              ? gernaltype
                ? classNames(rcn('select-items-wrapper'), rcn('open'))
                : classNames(
                    rcn('select-items-wrapper'),
                    rcn('open'),
                    rcn('extended-Selector')
                  )
              : rcn('select-items-wrapper')
          }
        >
          {filter && (
            <>
              <input onChange={onChangeText} placeholder={'Filter by name'} />
              <div className={rcn('search-border')} />
            </>
          )}

          {filterItems.map((item, index) => (
            <div
              onClick={() => onChangeLable(item)}
              key={index}
              className={rcn('select-item')}
            >
              {item.image && (
                <div className={rcn('image')}>
                  <img className={rcn('logo-image')} src={logo} />
                  <img className={rcn('profile-image')} src={item.image} />
                </div>
              )}
              {item.label && <div className={rcn('label')}>{item.label}</div>}
              {item.smallLabel && (
                <div className={rcn('small-label')}>{item.smallLabel}</div>
              )}
            </div>
          ))}
        </div>
      }
    </div>
  )
}

const StyledSelect: StyledComponent<
  React.FC<Readonly<SelectProps>>,
  any,
  {},
  never
> = styled(Select)`
  align-self: center;
  margin: 0 auto;
  width: 152px;

  .${rcn('extended-Selector')} {
    width: 270px !important;
  }

  .${rcn('select-items-wrapper')} {
    background: #ffffff;
    position: fixed;
    width: 152px;
    border: 1px solid #d1e3f8;
    box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
      0px 4px 16px rgba(50, 132, 225, 0.16);
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    max-height: 0;
    display: block;
    overflow: hidden;
    opacity: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .${rcn('open')} {
    max-height: 230px;
    overflow-y: auto;
    opacity: 1;
  }

  .${rcn('select-item')} {
    padding-top: 10px;
    padding-bottom: 10px;
    flex: 1;
    display: flex;

    cursor: pointer;
    &:hover .${rcn('small-label')} {
      background: #1e75d8;
      color: white;
    }
    &:hover .${rcn('label')} {
      background: #1e75d8;
      color: white;
    }
    &:hover {
      background: #1e75d8;
      color: white;
    }
  }

  .${rcn('label')} {
    color: #192533;
    ${FontSizes.large};
    line-height: 20px;
    padding-left: 21px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
  }

  .${rcn('small-label')} {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    ${FontSizes.medium};
    color: #60789a;
    margin-left: 8px;
    display: flex;
    align-items: center;
    line-height: 18px;
  }

  .${rcn('search-border')} {
    height: 1px;
    background: #deecfc;
  }
  .${rcn('image')} {
    padding-right: 11px;
    padding-left: 25px;
  }
  .${rcn('logo-image')} {
    border-radius: 50%;
    border: 1px solid #d1e3f8;
    box-sizing: border-box;
    position: absolute;
    left: 12px;
  }

  .${rcn('profile-image')} {
    border-radius: 50%;
    position: absolute;
  }

  input {
    padding-top: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    ${FontSizes.large};
    padding-bottom: 13px;
    padding-left: 21px;
    line-height: 20px;
    &:focus {
      outline: none !important;
      border: 0px;
    }
  }

  label {
    color: black;
  }
`

export { StyledSelect as Select }
