import { resolve } from "q"
import React from "react"
import { jobRoles } from "./JobArray"
import {
  JobOutcomesWrapper,
  JobName,
  Arrow,
  JobListItem,
  JobSallary,
  JobRequiredCourse,
  QaulificationsList,
  QaulificationLink,
  Title,
} from "./JobOutcomes.css"
const JobOutcomes = () => {
  const [displayJob, setDisplayJob] = React.useState(0)

  return (
    <JobOutcomesWrapper>
      <JobName>
        <Title>Job Name</Title>
        <QaulificationsList>
          {jobRoles.map((role, i) => (
            <JobListItem
              key={i}
              id={i}
              displayJob={displayJob}
              onMouseEnter={() => setDisplayJob(i)}
            >
              {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
              <Arrow
                id={i}
                displayJob={displayJob}
              >-></Arrow>
            </JobListItem>
          ))}
        </QaulificationsList>
      </JobName>
      <JobSallary>
        <Title>Job Sallary</Title>
        <QaulificationsList>
          {jobRoles.map((role, i) => (
            <JobListItem
              key={i}
              id={i}
              displayJob={displayJob}
              onMouseEnter={() => setDisplayJob(i)}
            >
              ${role.salary}
              <Arrow
                id={i}
                displayJob={displayJob}
              >-></Arrow>
            </JobListItem>
          ))}
        </QaulificationsList>
      </JobSallary>
      <JobRequiredCourse>
        <Title>Required Qaulifications</Title>

        {jobRoles.map((role, i) => (
          <QaulificationsList key={i} displayJob={displayJob} id={i}>
            {role.requiredQaulifications.map((qaulification, i) => (
              <JobListItem>
                <QaulificationLink
                  key={i}
                  href={`https://www.mentor.edu.au/courses/${qaulification.link}`}
                  target="_blank"
                >
                  {qaulification.name}
                </QaulificationLink>
              </JobListItem>
            ))}
          </QaulificationsList>
        ))}
      </JobRequiredCourse>
    </JobOutcomesWrapper>
  )
}

export default JobOutcomes