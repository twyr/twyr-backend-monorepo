# REST API curl examples

Run examples from the repository root with `base_url` set to the running server's
origin. For example:

```sh
base_url=http://127.0.0.1:9090
curl --config ./servers/curl_example_data/api_v1_health.curl "${base_url}/api/v1/health/"
```

Each `.curl` file contains the request method, headers, cookie options, and body
file when applicable. Its opening comments show the full invocation and route.
The URL is supplied on the command line so shell variables expand normally.
GET and DELETE examples send no request body. POST and PATCH examples read the
matching `.json` payload file.

For an authenticated user request, generate an OTP and log in first:

```sh
curl --config ./servers/curl_example_data/api_v1_users_session_manager_generate_otp.curl "${base_url}/api/v1/users/session-manager/generate-otp"
# Put the current OTP in the login JSON's password field before running this:
curl --config ./servers/curl_example_data/api_v1_users_session_manager_login.curl "${base_url}/api/v1/users/session-manager/login"
curl --config ./servers/curl_example_data/api_v1_users_profile_read.curl "${base_url}/api/v1/users/profile/"
```

The login request saves the session cookie in `cookies.txt`; authenticated examples
read that file. Use the corresponding `system_admin` examples to log in as a
system admin. Keep cookie jars separate, or log out before switching domains.
Session-validation examples read the cookie jar to inspect the current session.

Replace sample contact numbers and UUIDs with records in your environment.
The login and OTP-validation payloads use the development OTP `9090`; in
production, replace it with the current OTP. User profile creation also requires
the current OTP in `data.attributes.otp`. System-admin profile creation does not
accept an OTP attribute. Profile, contact, and locale creation routes require
an authenticated session, as their registered routes specify.

For an item route, set its path variable to an existing record's identifier:

```sh
contactId=22222222-2222-7222-8222-222222222222
curl --config ./servers/curl_example_data/api_v1_users_profile_contact_by_contact_id.curl "${base_url}/api/v1/users/profile/contact/${contactId}"
```

Other item examples use `localeId`, `id`, `iso_code`, or `messageCode`, as shown
in each file. Masterdata locale IDs are locale codes such as `en-IN`; country
codes use values such as `IN`. The system-message route forwards `messageCode`
as the master record identifier, so use the record's ID. For profile reads,
append the optional `relationships` query parameter to request related data.
