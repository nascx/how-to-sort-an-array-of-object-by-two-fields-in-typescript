type Team = {
    name: string,
    points: number,
    wins: number,
    goalDifference: number
}

const leaderboard: Team[] = [

    {
        name: 'Flamengo',
        points: 90,
        wins: 28,
        goalDifference: 49
    },
    {
        name: 'Palmeiras',
        points: 74,
        wins: 21,
        goalDifference: 29
    },
    {
        name: 'Athletico-PR',
        points: 64,
        wins: 18,
        goalDifference: 19
    },
    {
        name: 'Santos',
        points: 74,
        wins: 22,
        goalDifference: 27
    },
    {
        name: 'Grêmio',
        points: 65,
        wins: 19,
        goalDifference: 25
    }
]

const sortLeaderboard = leaderboard.sort((a, b) => {
    return b.points - a.points || b.wins - a.wins || b.goalDifference - a.goalDifference
})

console.log(sortLeaderboard)


