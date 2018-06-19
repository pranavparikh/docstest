### Setup
In the repo root (where you did the ***builder-init*** install), please follow these steps to setup the archetype project:

```bash
# 1.run archetype project
./node_modules/.bin/builder-init @walmart/otto-archetype-desktop

# 2.copy package.json from archetype to your repo
cp ./test/automation/package.json .

# 3.install the dependencies
npm install
```
### Run demo test locally:
```bash
npm run test
```
You should see  the runner [magellan](https://github.com/TestArmada/magellan) open up 2 Chrome windows at once, and the results of the two tests are aggregated in the console.

### Run demo test on Sauce Labs:
```bash
npm run test:saucelabs
```
Go to SauceLabs, after log in, you should be able to view your tests running at [Dashboard](https://saucelabs.com/beta/dashboard/tests). The tests are using Chrome60 browser on Windows 10.
