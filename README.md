# rivalry

Sourdough is the _starter_ (get it?) for web apps at The Michigan Daily.

It has several useful features:

- [x] React as a dependency by default
- [x] MicroCMS with [ArchieML](http://archieml.org/)
- [x] Data ingest from Google Sheets
- [x] Bundling with Parcel
- [ ] Easy deploy to S3 bucket

## Using this template

Click the green "Use this template" button to create a new instance of the `sourdough` template. Then, clone the new instance and run `yarn install` to initialize the project.

You can use `yarn start` to start a development server and `yarn build` to build production-ready files into `dist/`.

### Fetching from Google Drive

Download our service account credentials file (`auth.json`) and put it in the root of this repository.

The credentials file will have a `client_email` property. Share your Google Doc or Google Sheet with the value of this property in order to allow permission to fetch.

Our `config.json` file contains a `fetch` property which has an array of objects as the value. Each object represents a file that will be fetched.

An object must have `id`, `output`, and `auth` properties in order to query for a Google Doc. An object must also have a `sheetId` property to query for a Google Sheet.

The `auth` property of each object is the name of the credentials file. Since `auth` is a property of each object instead of the entire configuration file, we are able to fetch files that come from locations that may require different permissions.

You may fetch as few or as many files as you want.

#### Fetching JSON from a Google Doc

Consider the following generalized URL:

`https://docs.google.com/document/d/FILE_ID/edit`

1. In `config.json`, put `FILE_ID` in `id`.
2. Put a path where the JSON-ified AML should go in `output`. This path should probably be somewhere in `src/graphic`.
3. Run `yarn sink gdoc` to fetch the specified document.

You can import a JSON file in JS like this:

```js
import copy from "../data/data.json";
```

#### Fetching a CSV from a Google Sheet

Consider the following generalized URL:

`https://docs.google.com/spreadsheets/d/FILE_ID/edit#gid=SHEET_ID`

1. In `config.json`, put `FILE_ID` in `id`.
2. Put `SHEET_ID` in `sheetId`.
3. Put a path where the CSV should go in `output`. This path should probably be somewhere in `src/graphic`.
4. Run `yarn sink gsheet` to fetch the specified sheet.

You can import a CSV file in JS like this:

```js
import csvfile from "url:../data/data.csv";
// the "url:" prefix is specific to Parcel 2.
```
