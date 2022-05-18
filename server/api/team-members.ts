import type { ITeamMember } from '~~/types'

const teamMembers: ITeamMember[] = [
  {
    name: 'Hongbusi',
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    tag: 'Creator',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/Hongbusi',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'TickHeart',
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    tag: 'Core',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/TickHeart',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'alexzhang1030',
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    tag: 'Core',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/alexzhang1030',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'RainyNight9',
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    tag: 'Core',
    address: 'Beijing, China',
    link: 'https://RainyNight9.github.io',
    githubLink: 'https://github.com/RainyNight9',
    twitterLink: ''
  }
]

export default defineEventHandler(() => {
  return teamMembers
})
