import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 2em;
  .search-bar.ui.segment {
    background: var(--white);
  }
  input{
    background: var(--white) !important;
    color: var(--black);
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
    
`

export default function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <SearchContainer>
      <div className="search-bar ui segment">
          <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <input
                    placeholder="Search"
                    type="text"
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
            </div>
          </form>
      </div> 
    </SearchContainer>
    
  );
};

