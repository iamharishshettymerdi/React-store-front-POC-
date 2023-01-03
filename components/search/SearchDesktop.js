import React, { memo, useEffect, useState, useRef } from 'react'
import SearchForm from 'react-storefront/search/SearchForm'
import SearchField from 'react-storefront/search/SearchField'
import SearchSuggestions from 'react-storefront/search/SearchSuggestions'
import SearchProvider from 'react-storefront/search/SearchProvider'
import SearchPopover from 'react-storefront/search/SearchPopover'

function SearchDesktop() {
  const inputRef = useRef(null)
  const activeRef = useRef(false)
  const [query, setQuery] = useState('')
  const [popoverOpen, setPopoverOpen] = useState(false)

  useEffect(() => {
    if (!activeRef.current) {
      activeRef.current = true
    }
  }, [popoverOpen])


  const searchtextchangefunc=(value)=>{

    console.log("value ",value)
    setQuery(value)

   
    if(query.length<2)
    {
      setPopoverOpen(false);
    }
    else
    {
      setPopoverOpen(true);
    }

  }
  return (
    <SearchForm >
      <SearchField id="textboxid" style={{borderRadius: '25px',width: '400px',background:' #f6f6f8', 
    border: 'none', backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/2811/2811790.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',backgroundSize: '24px 20px',
    textIndent: '8px',zIndex: 'auto'}}    
        ref={inputRef}
        onChange={(value)=>{searchtextchangefunc(value)}}
        onFocus={()=>{ document.getElementById('textboxid').style.backgroundImage='none';}}
        onBlur={()=>{document.getElementById('textboxid').style.backgroundImage='url("https://cdn-icons-png.flaticon.com/512/2811/2811790.png")';}}
        value={query}
        submitButtonVariant="none"
        showClearButton={false}
      />
      {/* <input type="text" id="search" name="search" onchange="hideIcon(this);" value="search" /> */}
      <SearchProvider query={query} active={activeRef.current}>
        <SearchPopover
          open={popoverOpen}
          setQuery={setQuery}
          anchor={inputRef}
          onClose={() => setPopoverOpen(false)}
        >
          <SearchSuggestions />
        </SearchPopover>
      </SearchProvider>
    </SearchForm>
  )
}

export default memo(SearchDesktop)
