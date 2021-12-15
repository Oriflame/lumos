// @ts-check
const { promises: fs } = require('fs');
const path = require('path');

const root = process.cwd();

const srcRegex = /src/;

async function deletePackageFiles() {
  const packagePath = path.join(root, 'package.json');
  const packageBuffer = await fs.readFile(packagePath);

  const package = JSON.parse(packageBuffer.toString());

  package.files = package.files.filter((item) => !srcRegex.test(item));

  fs.writeFile(packagePath, JSON.stringify(package, undefined, 2));
}

deletePackageFiles();
