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

### Story E

As **Sara Sibling, Christian Chair, and Anna Admin** I want to be able to check into events to log my attendance by visiting `/checkin` and clicking the "Check-In" button on the appropriate event.

- Users should be redirected here after a valid login attempt
- Users with valid JWT tokens should also be redirected here upon navigating back to the webpage
- The "Check In" navigation tile should be shown and able to be clicked to these personas
- Current and upcoming events should be shown here
- Credit fulfillment state should be shown here

## 🚦🚧🔶 Following Under Construction 🔶🚧🚦

### Story F

As **Sara Sibling, Christian Chair, and Anna Admin** I want to be able to view all the records of attendance I have in the current and previous semesters.

- This page should be at `/attendance` and the nav tile "My Attendance" should be shown to these personas

### Story G

As **Christian Chair and Anna Admin** I want to be able to create new events for siblings to see and be able to check into.

### Story H

As **Christian Chair and Anna Admin** I want to be able to view attendance reports for all of my events as well as see complete lists of siblings who have fulfilled my credit requirement, and those who have not.

- Includes updating (adding/deleting peoples) attendance for particular events

### Story I

As **Anna Admin** I want to be able to promote/demote others to Siblings, Chairs, and Admins. I also want to control who has access to view info of the chapter and it's siblings.

## Wireframes

### Homepage

![Homepage Wireframe](homepage_wireframe.png)

#### Description

The homepage wireframe includes event cards displaying event information and options for members to check into events. The header includes the website title and navigation bar for easy navigation. The event creation link/button is visible only to authorized users (chairs and admins).

### Event Creation Page

![Event Creation Page Wireframe](event_creation_wireframe.png)

#### Description

The event creation page wireframe presents a form for chairs and admins to create new events, including fields for event details and credit assignment options. The header includes the website title and navigation bar for easy navigation.

### Attendance Management Page

![Attendance Management Page Wireframe](attendance_management_wireframe.png)

#### Description

The attendance management page wireframe provides chairs with a user-friendly interface to view attendance records for their events and download attendance lists. The header includes the website title and navigation bar for easy navigation. Download buttons for individual events and all events are provided.

### Member Management Page

![Member Management Page Wireframe](member_management_wireframe.png)

#### Description

The member management page wireframe allows the admin to manage member roles, credit assignment permissions, and access to personal information. The header includes the website title and navigation bar for easy navigation.

### Credit Management Page

![Credit Management Page Wireframe](credit_management_wireframe.png)

#### Description

The credit management page wireframe focuses solely on managing credit requirements for the semester. The header includes the website title and navigation bar for easy navigation.

### Landing Page

![Landing Page Wireframe](landing_page_wireframe.png)

#### Description

The landing page wireframe provides a welcoming introduction to the website and includes a login form for existing users. Users can also find a button to navigate to the sign-up page if they don't have an account. The header includes the website title and navigation bar for easy navigation, while the footer contains links to important documents.

### Sign-up Page

![Sign-up Page Wireframe](signup_page_wireframe.png)

#### Description

The sign-up page wireframe presents a form for users to input necessary information to create an account. This includes fields for name, email, password, and any additional required information. The header includes the website title and navigation bar for easy navigation, while the footer contains links to important documents.

### Credit Marking Page

![Credit Marking Page Wireframe](credit_marking_wireframe.png)

#### Description

The credit marking page wireframe allows chairs to mark off credits for members without needing an event to be logged. It includes a form for chairs to fill out for missed check-ins. The header includes the website title and navigation bar for easy navigation.

## Possible Future Development

- Announcement system
- Filtering events based on user roles
- User registration for future events
- Profile editing page (likely to be implemented)

## Notes

**Confidentiality of SOPs and Bylaws:** Please consult the parliamentarian to determine if SOPs and Bylaws should be kept confidential or if they can be publicly accessible.

## Technical Implementation

Please consult the current IT chair for technical details regarding implementation, including technologies to be used, API routes, database concerns, and any other technical requirements.
