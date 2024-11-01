import { defineStore } from 'pinia'

const getImgUrl = (imagePath: string) =>
  new URL(`${imagePath}`, import.meta.url).href

// const logoUrl = getImgUrl('@/assets/thermo-expert.png');

export const useAppData = defineStore('appData', () => {
  const title = ref('Thermo Expert')
  const socialLinks = ref([
    {
      name: 'Facebook',
      icon: 'mdi-facebook',
      link: 'https://facebook.com',
      color: '#0F98F6',
    },
    {
      name: 'Instagram',
      icon: 'mdi-instagram',
      link: 'https://instagram.com',
      color: '#EF0075',
    },
    {
      name: 'Twitter',
      icon: 'mdi-twitter',
      link: 'https://twitter.com',
      color: '#1A91DA',
    },
    {
      name: 'Soundcloud',
      icon: 'mdi-soundcloud',
      link: 'https://soundcloud.com',
      color: '#FF5501',
    },
    {
      name: 'Twitch',
      icon: 'mdi-twitch',
      link: 'https://twitch.tv',
      color: '#9147FF',
    },
    {
      name: 'Youtube',
      icon: 'mdi-youtube',
      link: 'https://youtube.com',
      color: '#FE0200',
    },
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      link: 'https://linkedin.com',
      color: '#0077B5',
    },
  ])
  const contact = ref({
    phone: { value: '+40 7xx xxx xxx', icon: 'mdi-phone' },
    email: { value: 'mail@thermo-expert.com', icon: 'mdi-email' },
  })
  const recentNews = ref([
    'Lorem ipsum dolor sit amet, consectetur.',
    'Donec at nunc eget massa bibendum ultrices.',
    'Donec non sem fermentum, malesuada augue.',
    'Sed pharetra metus vitae diam blandit.',
    'Proin quis lacus lobortis, semper arcu.',
  ])
  const blogPosts = ref([
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date().toLocaleDateString(),
      to: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString(),
      to: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toLocaleDateString(),
      to: '/',
    },
  ])
  const recentPosts = ref([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur. Donec at nunc eget massa bibendum ultrices.',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      }),
    },
    {
      text: 'Donec non sem fermentum, malesuada augue. Sed pharetra metus vitae diam blandit.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString(
        'en-US',
        { month: 'long', day: 'numeric' }
      ),
    },
  ])
  const projects = ref([
    {
      id: 1,
      src: getImgUrl('../assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
      title: 'Adrian',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'mountain',
    },
    {
      id: 2,
      src: getImgUrl(
        '../assets/projects/aliaksei-lepik-8qTBHezzF8I-unsplash.jpg'
      ),
      title: 'Aliaksei Lepik',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'fire',
    },
    {
      id: 3,
      src: getImgUrl(
        '../assets/projects/carlos-hevia-qhB6S2dts8A-unsplash.jpg'
      ),
      title: 'Carlos Hevia',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'mountain',
    },
    {
      id: 4,
      src: getImgUrl('../assets/projects/cindy-chen-EP4VrAn-WaY-unsplash.jpg'),
      title: 'Cindy Chen',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'night',
    },
    {
      id: 5,
      src: getImgUrl(
        '../assets/projects/everett-mcintire-BPCsppbNRMI-unsplash.jpg'
      ),
      title: 'Everett Mcintire',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'day',
    },
    {
      id: 6,
      src: getImgUrl(
        '../assets/projects/jamison-mcandie-waZEHLRP98s-unsplash.jpg'
      ),
      title: 'Jamison Mcandie',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'night',
    },
    {
      id: 7,
      src: getImgUrl(
        '../assets/projects/jerome-bertaux-tRkBF9Ujqw4-unsplash.jpg'
      ),
      title: 'Jerome Bertaux',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'day',
    },
    {
      id: 8,
      src: getImgUrl('../assets/projects/kimson-doan-AZMmUy2qL6A-unsplash.jpg'),
      title: 'Kimson Doan',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'night',
    },
    {
      id: 9,
      src: getImgUrl(
        '../assets/projects/kseniya-petukhova-_wj5Jd-AaK4-unsplash.jpg'
      ),
      title: 'Kseniya Petukhova',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'mountain',
    },
    {
      id: 10,
      src: getImgUrl(
        '../assets/projects/mike-erskine-S_VbdMTsdiA-unsplash.jpg'
      ),
      title: 'Mike Erskine',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'fire',
    },
    {
      id: 11,
      src: getImgUrl(
        '../assets/projects/patrick-boucher-0ccc00jMW1U-unsplash.jpg'
      ),
      title: 'Patrick Boucher',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'day',
    },
    {
      id: 12,
      src: getImgUrl(
        '../assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg'
      ),
      title: 'Robson Hatsukami Morgan',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'fire',
    },
    {
      id: 13,
      src: getImgUrl(
        '../assets/projects/sahin-yesilyaprak-V7uP-XzqX18-unsplash.jpg'
      ),
      title: 'Sahin Yesilyaprak',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'fire',
    },
    {
      id: 14,
      src: getImgUrl('../assets/projects/sayan-nath-MCfy9IZivT0-unsplash.jpg'),
      title: 'Sayan Nath',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'mountain',
    },
    {
      id: 15,
      src: getImgUrl(
        '../assets/projects/thomas-aeschleman-BG8te7fVCqU-unsplash.jpg'
      ),
      title: 'Thomas Aeschleman',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'night',
    },
    {
      id: 16,
      src: getImgUrl(
        '../assets/projects/twitter-praizist-PDNc3fFFrYk-unsplash.jpg'
      ),
      title: '@praizist Twitter',
      subtitle: 'Unsplash',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst. Donec scelerisque ante ante, vel tempor dolor auctor ut. Sed et luctus leo, eu egestas sapien. In semper commodo urna, id lacinia mi pretium eu. Suspendisse ornare blandit ligula id fermentum. Nulla lobortis, ligula quis consequat elementum, elit odio fringilla ligula, commodo tristique leo elit ac ex. Vestibulum semper sagittis odio sed aliquam. Pellentesque at turpis vel augue scelerisque malesuada at sit amet augue.',
      tags: ['tag', 'tag', 'tag'],
      category: 'day',
    },
  ])
  const instagramPosts = ref([
    {
      id: 1,
      src: getImgUrl(
        '../assets/instagram/ahmad-kadhim-GeHVEDrqMB8-unsplash.jpg'
      ),
    },
    {
      id: 2,
      src: getImgUrl(
        '../assets/instagram/ciocan-ciprian-XGny9I-k9RM-unsplash.jpg'
      ),
    },
    {
      id: 3,
      src: getImgUrl(
        '../assets/instagram/lukasz-szmigiel-dAgtO5H8cXg-unsplash.jpg'
      ),
    },
    {
      id: 4,
      src: getImgUrl('../assets/instagram/malka-l0m2p_k5VJ8-unsplash.jpg'),
    },
    {
      id: 5,
      src: getImgUrl('../assets/instagram/max-delsid-8-Aght_oHog-unsplash.jpg'),
    },
    {
      id: 6,
      src: getImgUrl(
        '../assets/instagram/ricardo-gomez-angel-SAJD-Q4FntE-unsplash.jpg'
      ),
    },
  ])
  const tweets = ref([
    {
      id: 1,
      author: '@vuetifyjs',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
    },
    {
      id: 2,
      author: '@vuetifyjs',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
    },
  ])
  const tags = ref(['Portfolio', 'Theme', 'Camping', 'Forest', 'Hiking'])
  const relatedPosts = ref([
    {
      id: 1,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl(
        '../assets/projects/everett-mcintire-BPCsppbNRMI-unsplash.jpg'
      ),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
    {
      id: 2,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl('../assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
    {
      id: 3,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl(
        '../assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg'
      ),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
  ])
  return {
    title,
    socialLinks,
    contact,
    recentNews,
    blogPosts,
    recentPosts,
    projects,
    instagramPosts,
    tweets,
    tags,
    relatedPosts,
  }
})
