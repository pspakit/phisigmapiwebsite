# Design Document: Phi Sigma Pi Forward Facing Website with Attendance Logger Component

## Overview

The website "phisigmapiunc.com" serves as the main forward facing website for the Alpha Kappa chapter of Phi Sigma Pi (PSP) at UNC. The website should inform potential new members (PNMs) about the values of PSP as well as the process to get involved. Further, the website should allow siblings to log in to view their standings within the chapter and log attendance to events.

## Key Personas

### Mary Maybe Member

- **Persona:** Unaffiliated but interested in Phi Sigma Pi
- **Minimum-Viable Feature:** View the static webpage for information about the fraternity and information on how to join.
- **Frequency/Importance of Use:** Infrequently and probably just a few times per person.

### Sara Sibling

- **Persona:** Sibling of Phi Sigma Pi
- **Minimum-Viable Feature:** Ability to log into the website and check into events.
- **Frequency/Importance of Use:** Regularly for event attendance and tracking requirements.

### Christian Chair

- **Persona:** Chair of Phi Sigma Pi events
- **Minimum-Viable Feature:** Ability to create events, download attendance lists, and view member attendance.
- **Frequency/Importance of Use:** Regularly for event management and attendance tracking.

### Anna Admin

- **Persona:** Admin of the Phi Sigma Pi chapter
- **Minimum-Viable Feature:** Ability to manage member roles and access permissions.
- **Frequency/Importance of Use:** Regularly for overall chapter management.

## User Stories

> Note: The Forward facing website will be similar to the current page, except with a design refresh

### Story A

As **Mary Maybe Member** I want to be greeted with a pleasing homepage upon fist loading the website.

- The homepage should provide highlights on the most important parts of PSP
- It should also provide direction on how to navigate the website (i.e. what information is where)
- The overall theme of the website should incorporate the colors of PSP
- Website navigation should be easily accessible at the top of the page
- Socials and other forms of contact should be included at the bottom of this page

### Story B

As **Any Persona** I want to navigate to `/recruitment` to see a description of the requirements PNMs need to know about the recruitment process. I also want to navigate to `/about` to learn more details about the chapter.

- The pages should include relevant graphics and charts such as rush process
- Content can come from the current recruitment and about page

### Story C

As **Any Persona** I want to navigate to `/gallery` to see a collection of images taken by the chapter.

- This needs to be fixed from the old website, as it was loading way too slow
- Possibly consider a swiping interface, or split images into pages of 100(?) to fix the slowness problem

### Story D

As **Sara Sibling, Christian Chair, and Anna Admin** I want to be able to log in using the login form, accessible at `/login`

- The login should be persistent for a month(?), to prevent users from needing to login every time
- Accounts should be able to be created using `/signup` with fields for email, name, password, etc.
  - Accounts should only be able to be logged into upon activation to prevent randoms from accessing the restricted portion of the website
  - Can also restrict accessing sensitive info to just chairs & exec or on a person to person basis

### Story E

As **Sara Sibling, Christian Chair, and Anna Admin** I want to be able to check into events to log my attendance by visiting `/checkin` and clicking the "Check-In" button on the appropriate event.

- Users should be redirected here after a valid login attempt
- Users with valid JWT tokens should also be redirected here upon navigating back to the webpage
- The "Check In" navigation tile should be shown and able to be clicked by these personas
- Current and upcoming events should be shown here
  - Only current events should have a visible "Check In" button
- The current credit fulfillment state for the user should be shown on this page

### Story F

As **Sara Sibling, Christian Chair, and Anna Admin** I want to be able to view all the records of attendance I have in the current and previous semesters.

- This page should be at `/attendance` and the nav tile "My Attendance" should be shown to these personas
- Data should be shown in a list/table like format
- Allow the list to be downloaded in a `.csv` format

### Story G

As **Christian Chair and Anna Admin** I want to be able to create new events and edit existing events for siblings to see and check into.

- The form for this should be at `/event/?` where "?" refers to the id of the event being edited (or 0 if creating a new event)
- The event should be created with a title, location, time, optional description, image, and credit it fulfills
- These personas should see a "New Event" button on the `/attendance` page as well as an "Edit Event" button for:
  - their events if they are a Chair
  - All events if you are an Admin

### Story H

As **Christian Chair and Anna Admin** I want to be able to view attendance reports for all of my events as well as see complete lists of siblings who have fulfilled my credit requirement, and those who have not.

- This page should be viewable at `/report`
- 2 sections: Event Attendance & Credit Fulfillment
- Event Attendance viewable at `/report/<event_id>`
  - List of attendees
- Credit Fulfillment should list siblings who have & have not completed a selected credit
- Export the lists as a `.csv` for both events and credit fulfillment

### Story I

As **Christian Chair and Anna Admin** I want to be able to edit the attendance list for my (chair) or all (admin) events.

- Able to navigate to `/report/<event_id>`
- See a delete button next to each name
- Able to select siblings from a dropdown to add to the attendance records

### Story J

As **Anna Admin** I want to be able to promote/demote others to Siblings, Chairs, and Admins. I also want to control who has access to view info of the chapter and it's siblings.

- Functionality stored at `/admin`
- Works much like the CSXL web application. Able to assign permission actions and resources to roles & assign roles to users
- For future: Able to control what user details each user is able to see

## Website Design

### Colors

The colors of the website should follow the PSP standard of purple, gold, and yellow.
Additional accent colors such as white and black can also be used.
Another idea would be to use pastel colors, which can be a little more inviting to the user: I think for this site, I could consider using some of the lighter shades to accomplish this.

![Potential Color Pallet](https://icolorpalette.com/download/palette/515760_color_palette.jpg)
A potential color pallet

### Design Concepts from other Websites

I like the landing portion of [this webpage](https://services.edutesla.com/).
Specifically, I like how the text is on a partially blurred background but is still easily read. I also like the nav bar at the top; however, it may be hard to implement something similar in this website due to the changing menu options based on login.
I am not a huge fan of having all of the information on one large page, since then the user has to scroll. If I were to do it, I would have each nav option point to another page. However, by doing it that way, I would need to come up with a new background for the nav that doesn't include the image.

On the [CS + SG Website](https://cssgunc.org/) I really like how the homepage is laid out. Having a simple call to action at the top, followed by clickable tiles underneath which detail all the different pages of the website. I also like the email form & contact information at the bottom of the page.
I don't like the color choices or the nav bar relying on clicking a "menu" button (however this may be more ideal on mobile devices, I should keep this in mind as most users for my website will be on their phones). I also don't like how the main photo on the front page is almost completely hidden behind the dark filtering color.

![Example Webpage](https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/01/cozzzy-copy.jpg?auto=format&q=60&fit=max&w=930)
I really like this landing page. The nav bar is simple but effective, and the illustration is out of the way of the text but is still nice to have. I also like the change in color and cutoff of the illustration as the page transitions to more information.

## 🚦🚧🔶 Following Under Construction 🔶🚧🚦

## Wireframes

### External Homepage

![Landing Page View](./images/External_Homepage1.png)
This will be the screen that will show upon loading the website without a valid JWT token. The bar at the top will be the site wide navigation, with the logo routing to this page. The `Join Us` button will link to the `/recruitment` page. The colored squares at the bottom will match up with the below scrolled image. The image in the middle is a placeholder and will be replaced for an actual image of phi sig siblings.

![Scrolled Page View](./images/External_Homepage2.png)
Each square will route to its appropriate page. The squares will have a background image with the color being transparent in front until the user hovers over the square, in which case the color will fade away revealing the entire photo. Also the bottom will contain the contact information including email and socials.

### About Page

### Recruitment Page

### Gallery Page

### Login/Signup Page

### Check in Page

### Event Creation/Edit Page

### Personal Attendance Page

### Event Attendance/Credit Fulfillment Page

### Admin Page

## Possible Future Development

- Announcement system
- Filtering events based on user roles
- Profile editing page (likely to be implemented)
- Sibling Information Sheet

## Technical Implementation

Please consult the current IT chair for technical details regarding implementation, including technologies to be used, API routes, database concerns, and any other technical requirements.

Consider building with some techniques outlined in [this repo](https://github.com/alan2207/bulletproof-react).