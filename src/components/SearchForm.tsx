import React, { useEffect, useState } from "react";
import { Language } from "./enums";
import {
  Channel,
  channelListCN,
  channelListEN,
  channelListJP,
  channelListKR,
} from "./types/Channel";

type SearchFormProps = {
  onTermSubmit: (term: string, source: string, language: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { onTermSubmit } = props;
  const [term, setTerm] = useState<string>("");
  const [channel, setChannel] = useState<string>("");
  const [language, setLanguage] = useState<string>(Language.JAPAN);
  const [channelList, setChannelList] = useState<Channel[]>(channelListJP);

  useEffect(() => {
    switch (language) {
      case Language.JAPAN:
        setChannelList(channelListJP);
        break;
      case Language.KOREA:
        setChannelList(channelListKR);
        break;
      case Language.CHINESE:
        setChannelList(channelListCN);
        break;
      case Language.ENGLISH:
        setChannelList(channelListEN);
        break;
      default:
        break;
    }
  }, [language]);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setTerm(event.currentTarget.value);
  };

  const onSelectChange = (event: React.FormEvent<HTMLSelectElement>): void => {
    setChannel(event.currentTarget.value);
  };

  const onFormSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    onTermSubmit(term, channel, language);
  };

  const onLanguageSelect = (event: React.FormEvent<HTMLInputElement>) => {
    setLanguage(event.currentTarget.value);
  };

  const channelOptions = channelList.map((channel) => {
    return (
      <option key={channel.channelId} value={channel.channelId}>
        {channel.channelName}
      </option>
    );
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
            <option key="" value="">
              Any
            </option>
            {channelOptions}
          </select>
        </div>
        <div className="inline fields">
          <label htmlFor="language">Select your language: </label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="language"
                checked={language === Language.JAPAN}
                value={Language.JAPAN}
                onChange={onLanguageSelect}
              />
              <label>日本語</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="language"
                checked={language === Language.KOREA}
                value={Language.KOREA}
                onChange={onLanguageSelect}
              />
              <label>한국어</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="language"
                checked={language === Language.CHINESE}
                value={Language.CHINESE}
                onChange={onLanguageSelect}
              />
              <label>中文</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="language"
                checked={language === Language.ENGLISH}
                value={Language.ENGLISH}
                onChange={onLanguageSelect}
              />
              <label>English</label>
            </div>
          </div>
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
