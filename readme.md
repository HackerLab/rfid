# RFID Auth server, kiosk, and control panel

This little program governs an RFID system. It provides a RESTful API to allow
for authentication, a kiosk mode for a terminal with a card reader, and an 
Admin Control Panel to allow a privileged user to manage the system.

## Starting

1. Download the files
2. run `npm install`
3. run `node app`

## Kiosk Mode

1. Point browser to `hostname/kiosk/`
2. Enter full screen
3. Remove keyboard and only allow RFID reader and mouse (optimally, touch screen)

## API

This API allows you to request information about the system. All return JSON objects.

* `GET /api/1.0/user/0000000000/info` - Gets user info by ID tag
* `GET /api/1.0/user/0000000000/canopen` - Checks to see if the user can open the door now, ex: `{result: 1}`

