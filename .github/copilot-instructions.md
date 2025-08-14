# Patrick Vuong's Portfolio Website - GitHub Copilot Instructions

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Repository Overview
This is a personal portfolio website for Patrick Vuong built as a **static HTML/CSS/JavaScript website**. The site showcases professional skills, projects, and contact information with a modern, responsive design. **No build tools, package managers, or compilation steps are required.**

## Technology Stack
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and CSS custom properties
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity (no frameworks)
- **No Dependencies**: Pure static website with no npm packages or build tools

## Quick Start - VALIDATED COMMANDS
```bash
# Clone and serve the website (takes 2-3 seconds)
cd /path/to/Portfolio-Website
python3 -m http.server 8000
# Access at: http://localhost:8000
```

**NEVER CANCEL**: Web server starts instantly (under 3 seconds). Set timeout to 10+ seconds if using async commands.

## Project Structure
```
Portfolio-Website/
├── README.md                 # Project documentation
├── .gitignore               # Git ignore rules
├── index.html               # Main website file
├── css/
│   └── styles.css          # All CSS styling (484 lines)
├── js/
│   └── main.js             # All JavaScript functionality (120 lines)
└── docs/
    └── prd.md              # Product Requirements Document
```

## Working Effectively

### Development Workflow
1. **Start Local Server** (REQUIRED for testing):
   ```bash
   cd /path/to/Portfolio-Website
   python3 -m http.server 8000
   ```
   - **Timing**: Server starts in 1-2 seconds
   - **Access**: http://localhost:8000
   - **NEVER CANCEL**: Always wait for server to be ready

2. **Edit Files**:
   - **HTML**: Edit `index.html` directly
   - **CSS**: Edit `css/styles.css` directly  
   - **JavaScript**: Edit `js/main.js` directly
   - **No compilation needed**: Changes are immediate

3. **Test Changes**:
   - Refresh browser to see changes
   - **CRITICAL**: Always test in browser after making changes
   - Test responsive design at different screen sizes

### Validation Commands (REQUIRED before completing work)
```bash
# Validate HTML syntax (takes 1-2 seconds)
python3 -c "
import html.parser
from html.parser import HTMLParser

class HTMLValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.errors = []
    
    def error(self, message):
        self.errors.append(message)

validator = HTMLValidator()
with open('index.html', 'r') as f:
    content = f.read()

try:
    validator.feed(content)
    print('HTML validation: PASSED - No syntax errors found')
except Exception as e:
    print(f'HTML validation: FAILED - {e}')
"
```

**NEVER CANCEL**: HTML validation completes in under 3 seconds.

## Manual Testing Requirements (MANDATORY)

### Complete User Scenario Testing
**YOU MUST run through these scenarios after making ANY changes:**

1. **Navigation Testing**:
   ```
   - Click each navigation link (Home, About, Projects, Contact)
   - Verify smooth scrolling to correct sections
   - Verify active state highlighting in navigation
   ```

2. **Contact Form Testing**:
   ```
   - Fill out all form fields: Name, Email, Message
   - Click "Send Message" button
   - Verify alert appears: "Thank you for your message! I will get back to you soon."
   - Verify form clears after submission
   - Test form validation by submitting empty fields
   ```

3. **Responsive Design Testing**:
   ```
   - Test desktop view (1200x800 or larger)
   - Test mobile view (400x800 or similar)
   - Verify header, navigation, and layout adapt correctly
   - Verify content remains readable and accessible
   ```

4. **Browser Console Check**:
   ```
   - Open developer tools
   - Check for JavaScript errors
   - Verify "Portfolio website loaded successfully!" log message
   ```

### Expected Test Results
- **Navigation**: Smooth scrolling works, active states update correctly
- **Form**: Validation works, success alert appears, form resets
- **Console**: Should show "Portfolio website loaded successfully!" with no errors
- **404 Errors**: Expected for placeholder images (profile.jpg, project1.jpg, project2.jpg)

## File Structure Details

### index.html (171 lines)
- **Sections**: Header, Hero, About, Projects, Contact, Footer
- **Key Features**: Semantic HTML5, responsive meta tags, accessibility attributes
- **Dependencies**: Links to css/styles.css and js/main.js

### css/styles.css (484 lines)
- **CSS Architecture**: CSS custom properties for theming, mobile-first responsive design
- **Key Features**: Flexbox/Grid layouts, smooth transitions, hover effects
- **Responsive Breakpoints**: 992px (tablet), 768px (mobile)

### js/main.js (120 lines)
- **Features**: Smooth scrolling navigation, form handling, active nav highlighting
- **Event Listeners**: DOMContentLoaded, scroll, form submit, click handlers
- **No External Dependencies**: Pure vanilla JavaScript

## Common Development Tasks

### Adding New Content
1. **New Section**: Add HTML to index.html, style in styles.css
2. **New Project**: Copy existing project card HTML structure, update content
3. **Style Changes**: Modify CSS custom properties in :root for theme changes

### Debugging Issues
1. **JavaScript Errors**: Check browser console for error messages
2. **CSS Issues**: Use browser dev tools to inspect elements
3. **Layout Problems**: Verify responsive breakpoints at 992px and 768px

### Assets and Images
- **Missing Images**: profile.jpg, project1.jpg, project2.jpg (expected 404s)
- **Resume Link**: assets/resume/resume.pdf (placeholder link)
- **Directory**: Create `assets/images/` and `assets/resume/` when adding real assets

## Build and Deployment

### No Build Process Required
- **Static Files**: HTML/CSS/JS served directly
- **No Compilation**: No webpack, gulp, grunt, or other build tools
- **No Package Manager**: No npm, yarn, or package.json

### Deployment Options
1. **GitHub Pages**: Push to gh-pages branch
2. **Netlify**: Drag and drop entire folder
3. **Vercel**: Connect GitHub repository
4. **Any Static Host**: Upload files via FTP/SFTP

## Performance and Optimization

### Current Performance
- **Load Time**: Under 1 second for text content
- **File Sizes**: CSS (484 lines), JS (120 lines), HTML (171 lines)
- **Optimization**: Minification not required but can be added for production

### Optimization Commands (Optional)
```bash
# CSS minification (if needed)
# No tools installed by default - would require external tool

# Image optimization (when adding real images)
# Recommend: optimize images before adding to repository
```

## Error Handling and Troubleshooting

### Expected Errors
- **404 Errors**: Missing placeholder images (normal, does not affect functionality)
- **Network Errors**: When offline or server not running

### Common Issues
1. **Server Not Starting**: Check if port 8000 is available
2. **Changes Not Visible**: Hard refresh browser (Ctrl+F5)
3. **JavaScript Not Working**: Check console for syntax errors

### Debug Commands
```bash
# Check if server is running
curl http://localhost:8000
# Should return HTML content

# Check file permissions
ls -la index.html css/styles.css js/main.js
# All files should be readable
```

## Coding Standards and Best Practices

### HTML Guidelines
- Use semantic HTML5 elements (header, nav, main, section, footer)
- Include alt attributes for images
- Maintain accessibility standards (ARIA labels, proper heading hierarchy)

### CSS Guidelines
- Use CSS custom properties for consistent theming
- Follow mobile-first responsive design approach
- Use meaningful class names (BEM methodology preferred)

### JavaScript Guidelines
- Use vanilla JavaScript (no jQuery or frameworks)
- Add event listeners after DOMContentLoaded
- Include meaningful console.log messages for debugging

## Security Considerations
- **Static Site**: No server-side vulnerabilities
- **Form Handling**: Client-side only (no data transmission)
- **Dependencies**: No external JavaScript libraries to maintain

## Version Control Best Practices
- **Git**: Repository already initialized
- **Commit Often**: Small, focused commits
- **Branch Strategy**: Create feature branches for major changes
- **Testing**: Always test locally before committing

---

## Quick Reference Commands

```bash
# Start development server
python3 -m http.server 8000

# Validate HTML
python3 -c "[HTML validation script from above]"

# Check repository status
git status

# View file structure
ls -la && ls -la css/ js/ docs/
```

**REMINDER**: Always test website functionality in browser after making changes. The website must work correctly for navigation, forms, and responsive design before considering any task complete.