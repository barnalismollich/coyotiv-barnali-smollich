# **Family Diary**

In the main branch in Github of barnalismollich/coyotiv-barnali-smollich you can find my project work I did during the software engineering training at Coyotiv UG in March - June 2022.

# **Project idea**

My project called "Family Diary" has the intention to be a website which should function as a  storage of our most important documents. Only family members (husband, all children and me) should have access to this page. Starting point should be a login page as the contents is sensitive. The main page is a list of our most important documents (testament, living will, power of attorney, passport number, vaccination certicate and so on) which in case of emergency can be accessed fast and easily.

# **Goal**

Store the most important documents in the application i.e. upload and download of documents are possible (although usability has to be improved).

# **Non-Goals**

1. Information only for family and not for the public (thus login and logout functions are mandatory).
2. No todo or shopping list.
3. Form follows function, i.e. the website contains mandatory stuff (Privacy Policy, Terms of use) but is not a fancy website.
4. Only storage of documents. No storage of photos, videos and audios in the first version.
5. Chat tool is integrated but more to show that I have worked with socket.io and not because it is a mandatory feature.
6. Deletion of documents and version control are not possible until now.

# **References and Sources**

Evernote, Penzu, Jimdo and Wix templates, tutorials at Coyotiv UG e.g. balsamiq, Google drive, Amazon drive

# **Technologies**

Frontend: Vue.js, Vuex, HTML, CSS, JavaScript, balsamiq

Backend: MongoDB Atlas, Docker, Google Cloud Run, socket.io, node

In Google Cloud Run one was able to see the application in the productive environment during the course. As it was a showcase project and not to be used in real life, it is inactive now. Here are some screenshots from the frontend and backend.

Login page:
![image (5)](https://user-images.githubusercontent.com/102354821/182450443-0ec157f8-816f-46dd-93b8-bb5208f8b16a.png)

Welcome page with chat function:
![image (6)](https://user-images.githubusercontent.com/102354821/182450713-836ac33a-8465-4d1f-a8ee-5526083be1aa.png)

User specific page with individual documents:
![image (12)](https://user-images.githubusercontent.com/102354821/182450337-aada04cc-ead8-4119-8eac-f6bc4a948bdf.png)

Terms and Conditions
![image (10)](https://user-images.githubusercontent.com/102354821/182450813-18751f61-aad1-4894-afb7-aa2954ef8abb.png)

Privacy Policy
![image (10)](https://user-images.githubusercontent.com/102354821/182450848-6a30b642-b43d-49de-aae6-dc9f5d7248e1.png)

A cookies policy and disclaimer were also created but in order to keep this README short I have not added screenshots here.

Backend:
![image (3)](https://user-images.githubusercontent.com/102354821/182451146-c2102bdd-a278-471b-82dd-4d2db53fc1f9.png)

# **Installation**

Fork the repository.

In the directory you would like to have the project, clone the repository

`$ git clone git@github.com:barnalismollich/coyotiv-barnali-smollich.git`
Open the project in your coding environment and install the dependencies with the following command.

`$ docker-compose up --build`

# **Run the stack**

`$ docker-compose up`

# **Access the stack from the browser**

Open up your /etc/hosts file.

In UNIX and VSCode, it can be opened via the following

`open /etc/hosts`
In Windows you can use the path `C:\Windows\System32\Drivers\etc\hosts in Windows`

Add the following line to your hosts file

`127.0.0.1 coyotiv-barnali-smollich.localhost`

# **Development mode**

You can also run the app in development environment if desired. Instead of running docker-compose up, run the following command:

`$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

# **License**

MIT LICENSE
Copyright (c) 2022 Barnali Smollich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
