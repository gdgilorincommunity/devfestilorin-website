# DevFestIlorin Official Website

Official Website Revamped for Devfest Ilorin

Welcome to the official repository of **DevFest Ilorin Website**, the biggest tech conference in North Central Nigeria! This event is part of the global **DevFest** initiative hosted by **Google Developer Groups (GDG)**. Our aim is to bring together developers, tech enthusiasts, and industry leaders to share knowledge, network, and build the future of technology.

## Getting Started

These instructions will help you set up the project locally and get it running on your machine for development and testing purposes.

### Prerequisites

- Node.js (version 14.6.0 or higher)
- npm (version 6.14.0 or higher) or yarn (version 1.22.0 or higher)
- Git

To check if you have Node.js and npm installed, run these commands in your terminal:

```bash
node --version
npm --version
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/gdgilorincommunity/devfestilorin-website
```

2. Navigate to the project directory

```bash
cd devfestilorin-website
```

3. Install dependencies

```bash
npm install or yarn install
```

4. Preprare husky installation

```bash
npm run prepare
```

### Running the Project Locally

To run the project on your local machine:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application should now be running on `http://localhost:3000` (or your specified port).

## Contributing

We welcome contributions to the Devfest Event project! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

#### Creating a PR

- Switch to the main branch
- Checkout to a new feature branch using the ticket name assigned on JIRA
  e.g if ticket name is TM-001 then that is the branch name
  `git checkout -b yourbranchname`
- See [PULL_REQUEST_TEMPLATE.md](/.github/PULL_REQUEST_TEMPLATE.md) for guide on filling the Pull request template
- If a feature branch exist for the current task you're working on, kindly branch out from that feature branch to create your branch
  E.g if we have a feature/epic-name all related ticket that belongs to the epic, their branch should also point to it when submiting PR

#### Commit message

Follow the commit message standared as outline below:

```sh
PATTERN="^(feat|fix|docs|style|refactor|test|chore)(\([a-z]+\))?: .{1,100}$"
```

###### Commit Message flags

- feat - new feature or task implementation
- fix - bug fix
- docs - add update to readme or make some code documentation via comment only
- style
- refactor - minor rework on codebase or implementation improvement that affect one or less files (<= 5 files)
- test - adding test
- chore - major change to existing implementation that affect many files (>=6 files)

e.g

```
git commit -m 'feat: implement login flow'
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- GDG Ilorin technical team
- [List any other contributors or resources used]

---

We appreciate your interest and contributions!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

### Deploying to Firebase

1. Install the Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize your project:

```bash
firebase init
```

4. Deploy to Firebase:

```bash
firebase deploy
```

### Deploying to Vercel

1. Install the Vercel CLI:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy the project:

```bash
vercel
```

4. Follow the prompts to complete the deployment.

## Deploying to Netlify

You can deploy this project to Netlify using either the web interface or the Netlify CLI. Here's how to do it using the CLI:

### Using Netlify CLI

1. Install the Netlify CLI globally:

```bash
   npm install netlify-cli -g
```

2. Login to your Netlify account:

```bash
netlify login
```

3. Initialize your project (run this from the project root):

```bash
netlify init
```

This command will guide you through the process of connecting the project to Netlify. It will ask you to:

- Create a new site or link to an existing site
- Set up your build command and publish directory

4. Deploy your site:

```bash
netlify deploy
```

This will provide a draft URL to preview the site. 5. When you're ready to deploy to production, use:

```bash
netlify deploy --prod
```

6. Your site is now live! The CLI will output the live site URL.

#### Continuous Deployment

To set up continuous deployment:

Ensure your project is pushed to a GitHub repository.

Run netlify init if you haven't already, and choose the option to connect to a GitHub repo.

Netlify will automatically deploy your site whenever you push changes to your connected GitHub repository.

#### NOTE:

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
