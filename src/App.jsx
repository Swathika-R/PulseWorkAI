
import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const stats = [
    { title: "Total Projects", value: "5", icon: "▣", color: "purple" },
    { title: "Total Tasks", value: "500", icon: "☷", color: "blue" },
    { title: "Active Members", value: "16", icon: "♟", color: "green" },
    { title: "Pending Tasks", value: "66", icon: "◷", color: "yellow" }
  ];
  const tasks = [
    { name: "Homepage UI Design", project: "Project Landing", category: "UI", status: "Completed" },
    { name: "Website Development", project: "Search To Find", category: "Dev", status: "In Progress" },
    { name: "Update Application API", project: "Mobile App", category: "API", status: "Pending" },
    { name: "Prepare DB Report", project: "QC Reporting", category: "DB", status: "In Progress" },
    { name: "Test Login Functionality", project: "Java Project", category: "Test", status: "Pending" }
  ];
  const projects = [
    { name: "Project Landing", type: "UI Development", progress: "75%", color: "purple" },
    { name: "Search To Find", type: "Web Application", progress: "60%", color: "blue" },
    { name: "Mobile App", type: "App Development", progress: "45%", color: "pink" },
    { name: "QC Reporting", type: "Data Analysis", progress: "90%", color: "green" },
    { name: "Java Project", type: "Development", progress: "30%", color: "orange" }
  ];

  return (
    <div className="dashboard">

      <Navbar />

      <main className="main-content">

        {/* Search bar and user profile */}
        <header className="topbar">
          <input
            type="text"
            placeholder="Search projects, tasks, or team..."
          />

          <div className="profile">
            <div className="avatar">S</div>
            <span>Swathii</span>
          </div>
        </header>

        {/* Welcome section */}
        <section className="welcome">
          <h1>Welcome back, Swathi</h1>
          <p>Here's what's happening in your workspace today.</p>
        </section>

        {/* Dashboard cards */}
        <section className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <div className={`stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
              </div>

            </div>
          ))}
        </section>

        {/* Tasks and projects */}
        <section className="content-grid">

          {/* Recent tasks table */}
          <div className="panel">

            <div className="panel-header">
              <h2>Recent Tasks</h2>
              <a href="#tasks">View All →</a>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Project</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                      {task.name}
                    </td>

                    <td>{task.project}</td>
                    <td>{task.category}</td>

                    <td>
                      <span className={`status ${task.status
                        .replace(" ", "-")
                        .toLowerCase()}`}>
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          {/* Active projects list */}
          <div className="panel projects-panel">

            <div className="panel-header">
              <h2>Active Projects</h2>
              <a href="#projects">View All →</a>
            </div>

            {projects.map((project, index) => (
              <div className="project-item" key={index}>

                <div className={`project-icon ${project.color}`}>
                  {project.name.charAt(0)}
                </div>

                <div className="project-details">
                  <h4>{project.name}</h4>
                  <p>{project.type}</p>
                </div>

                <span className="progress">
                  {project.progress}
                </span>

              </div>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
