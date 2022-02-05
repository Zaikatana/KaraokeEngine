enum ChannelName {
    UTACCHAOU = "カラオケ歌っちゃ王",
    JOYSOUND = "JOYSOUND CHANNEL",
    KIONFU = "生音風カラオケ屋",
    GREEN = "G reen",
    TJ = "TJ KARAOKE TJ 노래방 공식 유튜브채널",
    BLUESKY = "Blue Sky Karaoke",
    MUSICA = "傷心的音符musica china canal",
    KING = "K歌王迷你KTV",
    VOCOMASTER = "VocoMaster Karaoke",
}

enum ChannelId {
    UTACCHAOU = "UC1tk9F5-MGXEq4LWnjmrtpA",
    JOYSOUND = "UCZXOq4XxCsSL7VPtXUU435w",
    KIONFU = "UCZ3ryrdsdqezi2q-AfRw6Rw",
    GREEN = "UCuhnZ_NxJ8Yhuhv_t7P7GnA",
    TJ = "UCZUhx8ClCv6paFW7qi3qljg",
    BLUESKY = "UC_od0hSC2VUuZ25fW8JZzLw",
    MUSICA = "UCIF_1oSxR545pRcH0N0eW9A",
    KING = "KTVUC6yEBiJuBPQLEoGRtEwoPxg",
    VOCOMASTER = "UCubbBPQ0Dq2oaH7C6J56qaw",
}

export type Channel = {
    channelName: string;
    channelId: string;
}

export const channelListJP: Channel[] = [
    { channelName: ChannelName.UTACCHAOU, channelId: ChannelId.UTACCHAOU },
    { channelName: ChannelName.JOYSOUND, channelId: ChannelId.JOYSOUND },
    { channelName: ChannelName.KIONFU, channelId: ChannelId.KIONFU },
    { channelName: ChannelName.GREEN, channelId: ChannelId.GREEN },
]

export const channelListKR: Channel[] = [
    { channelName: ChannelName.TJ, channelId: ChannelId.TJ },
]

export const channelListEN: Channel[] = [];

export const channelListCN: Channel[] = [
    { channelName: ChannelName.BLUESKY, channelId: ChannelId.BLUESKY },
    { channelName: ChannelName.MUSICA, channelId: ChannelId.MUSICA },
    { channelName: ChannelName.KING, channelId: ChannelId.KING },
    { channelName: ChannelName.VOCOMASTER, channelId: ChannelId.VOCOMASTER },
];