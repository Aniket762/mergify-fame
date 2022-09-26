<p align='center'>
<img src='https://user-images.githubusercontent.com/67703407/192349473-554c49ec-9f9d-4e6b-b0fb-d727cf460a4a.png' width='150' >
</p>

<h1 align='center'> Mergify Masters </h1>

<p align="justify">
Combining the individual work of an enormous team of engineers into one codebase is tough. And the difficulty lies deeper than our 
standard merge conflicts, which version control is fairly good at handling. There’s a way more troublesome type of conflict we can run 
into when simultaneous changes are made to multiple areas of code that depend upon one another.
Mergify is an automation service for software engineering teams who use GitHub to collaborate. 
It allows engineers to improve their code merging process by defining workflows, queueing merges, and removing manual interventions.
In this workshop you would understand how Mergify works and how Mergify can solve forseen and unforseen bottlenecks in software development lifecycle.
Mergify is FREE for opensource repositories, once you learn the workflow from the next project I am pretty sure you would be using it. 
</p>

<img width="1440" alt="Mergify Masters Landing Page" src="https://user-images.githubusercontent.com/67703407/192349119-2550eec1-e695-4f6b-a5b0-a7954b9cea3f.png">


## How to run in local host 👨‍💻
First of all, thanks a lot for taking out the time to review our product in action. Hope you have a great experience ahead 💪
### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Clone the project in localhost
```bash
git clone https://github.com/Aniket762/mergify-masters.git
```
Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

### Spin up the development server

```bash
npm run develop
```
The application is built with Gastby. Incase you have Gastby CLI configured in your terminal. After installing the dependencies all you need to do is gatsby develop, you are to good to get the serve running at port `:8000`


## How to check the workflow 🤔
Create your profile and do the following

_Note: Don't directly commit to the master branch in your Pull Request. Create a branch name it as `github-username-MM/YYYY` for example `Aniket762-10/2022`_

### 1️⃣ Create `src/data/github-username.json`
Create a new file inside `src/data` with the your Github Username. Ensure you use the same text casing here as you may have used in creating your profile. Make sure to add the .json extension on the end of the file name otherwise your file will not be rendered correctly.

Here below there is an example of how to structure the event content.

```json
{
  "salutation": "Namaste! 🙏",
  "name": "Aniket Pal",
  "testimonial": "Mergify has helped me automate 80% of the applications I have developed so far and ultimately made development process more hassel free for me",
  "organization": "Mergify",
  "image": "/images/avatar/aniket762.jpg",
  "backgroundImg": "/images/cover/mergify-cover.jpeg",
  "twitter": "https://twitter.com/itzaniket762",
  "github": "https://github.com/Aniket762",
  "linkedin": "https://www.linkedin.com/in/aniket-pal-5996251aa/"
}
```

Feel free to modify all the keys above, also we would love to see your cool salutation so add an awesome salutation 🥰 <br/>
For filling up the organization you can add your University if you are student or add the name of last organization which you have last worked with. To be honest we would love to see the diversity of our end users. But most importantly, we would love to know how you felt about the product and do you actually believe it solves the problem? Let us know what you think 😄

### 2️⃣ Add your profile picture in `static/images/avatar`
Make sure you name profile picture with your GitHub username. We only aim to make every file name unique thus avoiding any issues while rendering 

### 3️⃣ Add your cover picture in `static/images/cover`
Make sure you name cover picture with your GitHub username. We only aim to make every file name unique thus avoiding any issues while rendering. As cover you can add any cool wallpaper which you have came across recently. We would love to see your cover as Mergify's cover, which is already stored in the directory and named as _mergify-cover.jpeg_ 
<img src="https://user-images.githubusercontent.com/67703407/192363464-08940f87-f871-43ac-90fc-6e2196830587.png">


Once, you have done all the changes specified above you are good to raise the Pull Request and checkout the automation by our bot!🚀

## How to send the Pull Request 🤯
Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. Name the **Branch** as per your GitHub username 
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes
 
In the process please abide by Contributing Guidelines and [Code of Conduct](https://github.com/Aniket762/mergify-masters/blob/main/CODE_OF_CONDUCT.md) 🚀

## Outro 💚
The features of Mergify are endless. The purpose of this workshop was to spark an interest in this amazing tool which can save you a lot of time and efforts. Check out all the features in the [documentation](https://docs.mergify.com/). Don't wait too long, create your account and get started with [Mergify](https://mergify.com/?utm_source=blogger&utm_medium=social&utm_campaign=Aniket). In case you have some questions regarding the workshop or want to discuss something under the sun feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/aniket-pal/) ✨
