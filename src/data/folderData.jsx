// Below is a simple example of a JSON structure that represents a file explorer UI.
// This example assumes a basic hierarchical structure with folders and files:

export const FILE_EXPLORER_UI_DATA = {
  name: "Root",
  type: "folder",
  children: [
    {
      name: "Documents",
      type: "folder",
      children: [
        {
          name: "Project Reports",
          type: "folder",
          children: [
            {
              name: "Q1 Report",
              type: "file",
              size: "256 KB",
              created: "2024-01-21",
              modified: "2024-01-22",
            },
            {
              name: "Q2 Report",
              type: "file",
              size: "320 KB",
              created: "2024-04-15",
              modified: "2024-04-18",
            },
          ],
        },
        {
          name: "Personal",
          type: "folder",
          children: [
            {
              name: "Resume.pdf",
              type: "file",
              size: "120 KB",
              created: "2024-02-10",
              modified: "2024-02-15",
            },
            {
              name: "Cover Letter.docx",
              type: "file",
              size: "90 KB",
              created: "2024-02-12",
              modified: "2024-02-14",
            },
          ],
        },
      ],
    },
    {
      name: "Photos",
      type: "folder",
      children: [
        {
          name: "Vacation",
          type: "folder",
          children: [
            {
              name: "Beach.jpg",
              type: "file",
              size: "1.5 MB",
              created: "2023-07-01",
              modified: "2023-07-05",
            },
            {
              name: "Mountain",
              type: "folder",
              children: [
                {
                  name: "Project Reports",
                  type: "folder",
                  children: [
                    {
                      name: "Q1 Report",
                      type: "file",
                      size: "256 KB",
                      created: "2024-01-21",
                      modified: "2024-01-22",
                    },
                    {
                      name: "Q2 Report",
                      type: "file",
                      size: "320 KB",
                      created: "2024-04-15",
                      modified: "2024-04-18",
                    },
                  ],
                },
                {
                  name: "Personal",
                  type: "folder",
                  children: [
                    {
                      name: "Resume.pdf",
                      type: "file",
                      size: "120 KB",
                      created: "2024-02-10",
                      modified: "2024-02-15",
                    },
                    {
                      name: "Cover Letter.docx",
                      type: "file",
                      size: "90 KB",
                      created: "2024-02-12",
                      modified: "2024-02-14",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Family",
          type: "folder",
          children: [
            {
              name: "Birthday.jpg",
              type: "file",
              size: "800 KB",
              created: "2023-05-05",
              modified: "2023-05-10",
            },
            {
              name: "Holiday.jpg",
              type: "file",
              size: "1.2 MB",
              created: "2023-12-25",
              modified: "2023-12-27",
            },
          ],
        },
      ],
    },
  ],
};
