# @hellojayjay/time

![npm](https://img.shields.io/npm/dm/@hellojayjay/time)
![npm](https://img.shields.io/npm/v/@hellojayjay/time)

This is a very simple library defines the constants of unit of time, like `millisecond per second`, `millisecond per minute`, `millisecond per hour`, `second per minute` etc.

## Install

`npm install @hellojayjay/time`

## Usage

```javascript
import { SECOND } from "@hellojayjay/time"

setInterval(() => {
  doSomething()
}, 3 * SECOND)
```

#### Time in millisecond

| Constant Name                     | Number                  |
|-----------------------------------|-------------------------|
| MILLISECOND_UNIT                  | 1                       |
| SECOND                            | 1000                    |
| MINUTE                            | 60000                   |
| HOUR                              | 3600000                 |
| DAY                               | 86400000                |
| WEEK                              | 604800000               |
| MONTH_28                          | 2419200000              |
| MONTH_29                          | 2505600000              |
| MONTH                             | 2592000000              |
| MONTH_31                          | 2678400000              |
| YEAR                              | 31536000000             |
| YEAR_366                          | 31622400000             |

#### Time in second

| Constant Name                     | Number                  |
|-----------------------------------|-------------------------|
| SECOND_UNIT                       | 1                       |
| SECOND_PER_MINUTE                 | 60                      |
| SECOND_PER_HOUR                   | 3600                    |
| SECOND_PER_DAY                    | 86400                   |
| SECOND_PER_WEEK                   | 604800                  |
| SECOND_PER_MONTH_28               | 2419200                 |
| SECOND_PER_MONTH_29               | 2505600                 |
| SECOND_PER_MONTH                  | 2592000                 |
| SECOND_PER_MONTH_31               | 2678400                 |
| SECOND_PER_YEAR                   | 31536000                |
| SECOND_PER_YEAR_366               | 31622400                |

