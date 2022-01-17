import React, { useState } from "react";

type SearchFormProps = {
  onTermSubmit: (term: string) => Promise<void>;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { onTermSubmit } = props;
  const [term, setTerm] = useState<string>("");

  const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setTerm(event.currentTarget.value);
  };

  const onFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Song Search</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
      </form>
    </div>
  );
};
