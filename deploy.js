#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting deployment process...\n');

// Check if .env file exists
if (!fs.existsSync('.env')) {
  console.log('⚠️  Warning: .env file not found!');
  console.log('📝 Please copy env.example to .env and fill in your EmailJS credentials.\n');
}

try {
  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Run linting
  console.log('\n🔍 Running linter...');
  execSync('npm run lint', { stdio: 'inherit' });

  // Build the project
  console.log('\n🏗️  Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if dist folder exists
  if (fs.existsSync('dist')) {
    console.log('\n✅ Build successful!');
    console.log('📁 Build files are in the "dist" folder');
    console.log('\n🌐 Ready for deployment!');
    console.log('📖 Check DEPLOYMENT.md for deployment instructions');
  } else {
    console.log('\n❌ Build failed - dist folder not found');
    process.exit(1);
  }

} catch (error) {
  console.log('\n❌ Deployment process failed:');
  console.log(error.message);
  process.exit(1);
}
