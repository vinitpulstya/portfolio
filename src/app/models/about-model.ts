import { Job } from "./job-model";

export interface About {
    name: String,
    description: String,
    currentExperience: Job,
    notableExperiences: Array<ExperienceAboutPage>,
    skills: Array<String>
};

interface ExperienceAboutPage extends Job {
    display_text: String,
}