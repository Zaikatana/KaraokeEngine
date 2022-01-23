import React, { useState } from "react";
import { channelList } from "./types/Channel";

type SearchFormProps = {
  onTermSubmit: (term: string, source: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { onTermSubmit } = props;
  const [term, setTerm] = useState<string>("");
  const [channel, setChannel] = useState<string>("");

  const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setTerm(event.currentTarget.value);
  };

  const onSelectChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    setChannel(event.currentTarget.value);
  }

  const onFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    onTermSubmit(term, channel);
  };

  const channelOptions = channelList.map((channel) => {
    return <option key={channel.channelId} value={channel.channelId}>{channel.channelName}</option>;
  });

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Song Search</label>
          <input type="text" onChange={onInputChange} value={term} />
        </div>
        <div className="field">
          <label>Channel Filter</label>
          <select className="ui fluid dropdown" onChange={onSelectChange}>
            <option key="" value="">Any</option>
            {channelOptions}
          </select>
        </div>
        <span>
          J-Karaoke System v1.0 - Created by Brian Luc &nbsp;
          <a
            href="https://www.flaticon.com/free-icons/microphone"
            title="microphone icons"
          >
            Microphone icon created by Freepik - Flaticon
          </a>
        </span>
      </form>
    </div>
  );
};
