
# User Search App

This web application allows users to search for specific users from a list fetched from the JSONPlaceholder API. It provides a single search input field and a dropdown menu to select the search criteria (name, username, email, or phone). The search results are displayed in a table, dynamically updating as the user types or changes the search criteria.

## Key Features
- **Single Search Input**: Streamlined search experience with one input field for all search types.
- **Dynamic Filtering**: Instant filtering of user data based on the selected criteria and search term.
- **Redux Toolkit Integration**: Efficient state management using Redux Toolkit for fetching, storing, and filtering user data.
- **TypeScript**: Enhanced type safety throughout the application to reduce potential runtime errors.
- **Modern Fetch API**: Utilizes the native Fetch API with `async/await` for asynchronous data fetching.

## Installation

To install and run the User Search App locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/zulpukarovx/user-search-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd user-search-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

The app will be running at `http://localhost:3000` (or a similar port depending on your setup).

## Usage

1. **Select Search Criteria**: Choose the desired search criteria (name, username, email, or phone) from the dropdown menu.
2. **Enter Search Term**: Type the search term into the input field.
3. **View Results**: The filtered list of users will be displayed in the table below.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

This project is licensed under the [MIT License](LICENSE).

---