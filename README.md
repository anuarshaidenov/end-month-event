# End of Month Event Creator

**End of Month Event Creator** is an open-source web application that allows users to create recurring Google Calendar events on the last day of every month. Google Calendar natively lacks the ability to set such recurring events, so this app fills that gap with an easy-to-use interface.

## Features

- **Create recurring events**: Automatically schedule events for the last day of every month.
- **Full-day or timed events**: Choose between full-day events or specific time ranges.
- **Google Calendar integration**: Seamlessly connects to Google Calendar to manage your events.
- **Open-source and customizable**: Modify and extend the project to suit your needs.

## Demo

Check out the [live demo](https://endmonthevent.vercel.app/)

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Next.js** (v14 or higher)
- A Google Developer account and access to the [Google Calendar API](https://developers.google.com/calendar)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/anuarshaidenov/end-month-event.git
cd end-of-month-event-creator
```

2. Install the dependencies:

```bash
yarn
```

3. Set up your Google Calendar API credentials:

- Create a new project in the [Google Developer Console](https://console.developers.google.com/).
- Enable the **Google Calendar API**.
- Create OAuth 2.0 credentials and download the `credentials.json` file.
- Store the client ID and client secret in your environment variables (`.env` file).

Example `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

4. Run the development server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

To build and deploy the app:

```bash
yarn build
yarn start
```

## Usage

1. **Log in** with your Google account.
2. **Create an event**: Enter the event title and click "Create End of Month Event."
3. The event will automatically be added to your Google Calendar for the last day of every month.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please adhere to the project's [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or reach out to the project maintainers:

- [Your Name](https://github.com/anuarshaidenov)
- [Project Website](https://endmonthevent.vercel.app/)

---

This `README.md` provides an overview of your project, installation instructions, and contribution guidelines, making it easy for other developers to use and contribute to the project.
