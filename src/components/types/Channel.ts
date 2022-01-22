enum ChannelName {
    UTACCHAOU = "カラオケ歌っちゃ王",
    JOYSOUND = "JOYSOUND CHANNEL",
    KIONFU = "生音風カラオケ屋",
    GREEN = "G reen",
}

enum ChannelId {
    UTACCHAOU = "UC1tk9F5-MGXEq4LWnjmrtpA",
    JOYSOUND = "UCZXOq4XxCsSL7VPtXUU435w",
    KIONFU = "UCZ3ryrdsdqezi2q-AfRw6Rw",
    GREEN = "UCuhnZ_NxJ8Yhuhv_t7P7GnA",
}

export type Channel = {
    channelName: string;
    channelId: string;
}

export const channelList: Channel[] = [
    { channelName: ChannelName.UTACCHAOU, channelId: ChannelId.UTACCHAOU },
    { channelName: ChannelName.JOYSOUND, channelId: ChannelId.JOYSOUND },
    { channelName: ChannelName.KIONFU, channelId: ChannelId.KIONFU },
    { channelName: ChannelName.GREEN, channelId: ChannelId.GREEN },
]