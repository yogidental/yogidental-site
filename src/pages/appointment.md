---
title: "Appointment"
description: "Book your appointment at Yogi Dental Center. Choose a date and time, tell us what you need, and our friendly team will confirm your visit."
format: md
slug: /appointment
hide_table_of_contents: true
---

<div className="yd-page-banner">
<div className="yd-page-banner__inner">
<span className="yd-page-banner__title">Make an Appointment</span>
<nav className="yd-breadcrumb">
<a href="/">Home</a>
<span className="yd-breadcrumb__sep">›</span>
<a href="/contact">Contact Us</a>
</nav>
</div>
</div>

<div className="yd-book">
<div className="yd-book-card">

<p className="yd-eyebrow">Book Now</p>

## Book Your Appointment

<div className="yd-book-form">

<div className="yd-book-full yd-field">
<label>Patient Category</label>
<div className="yd-radio-group">
<label className="yd-radio"><input type="radio" name="yd-patient" defaultChecked /> <span>New Patient</span></label>
<label className="yd-radio"><input type="radio" name="yd-patient" /> <span>Existing Patient</span></label>
</div>
</div>

<div className="yd-field">
<label htmlFor="yd-date">Select Appointment Date</label>
<input id="yd-date" type="date" />
</div>

<div className="yd-field">
<label htmlFor="yd-slot">Select Time Slot</label>
<select id="yd-slot" defaultValue="">
<option value="">Select a time slot</option>
<option>09:30 AM - 10:30 AM</option>
<option>10:30 AM - 11:30 AM</option>
<option>11:30 AM - 12:30 PM</option>
<option>01:30 PM - 02:30 PM</option>
<option>02:30 PM - 03:30 PM</option>
<option>03:30 PM - 04:30 PM</option>
<option>04:30 PM - 05:30 PM</option>
</select>
</div>

<div className="yd-book-full yd-field">
<label htmlFor="yd-treatment">What Dental Treatment Are You Looking For?</label>
<select id="yd-treatment" defaultValue="">
<option value="">Select a treatment</option>
<option>Braces</option>
<option>Broken Teeth</option>
<option>Cavity</option>
<option>Crown</option>
<option>Dental Implants</option>
<option>Dentures</option>
<option>Extraction</option>
<option>Root Canal</option>
<option>Toothache</option>
<option>Teeth Cleaning</option>
<option>Veneers</option>
<option>Dental Exam</option>
</select>
</div>

<div className="yd-field">
<label htmlFor="yd-name">Your Name</label>
<input id="yd-name" type="text" placeholder="Enter your name" />
</div>

<div className="yd-field">
<label htmlFor="yd-email">Email</label>
<input id="yd-email" type="email" placeholder="Enter your email" />
</div>

<div className="yd-book-full yd-field">
<label htmlFor="yd-phone">Phone</label>
<input id="yd-phone" type="tel" placeholder="Enter your phone number" />
</div>

<div className="yd-book-full yd-field">
<label htmlFor="yd-issue">Describe Your Dental Issue</label>
<textarea id="yd-issue" rows="4" placeholder="Tell us briefly about your dental concern"></textarea>
</div>

<div className="yd-book-full yd-book-submit">
<a className="yd-btn" href="https://calendly.com/yogidental/new-patient">Submit</a>
</div>

</div>

</div>
</div>
