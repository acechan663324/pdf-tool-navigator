import { PdfTool } from '../types';

export const pdfTools: PdfTool[] = [
  {
    id: 2,
    name: 'iLovePDF',
    description: 'The go-to online platform for all PDF tasks. Merge, split, compress, convert, and edit files with a simple, intuitive interface and a generous free tier.',
    longDescription: 'iLovePDF provides a wide array of tools to merge, split, compress, convert, rotate, unlock and watermark PDFs, all for free and with a simple user interface. It is one of the most popular online destinations for quick PDF tasks.',
    website: 'https://www.ilovepdf.com/',
    price: 7,
    priceDisplay: 'Freemium ($7/mo)',
    rating: 4.8,
    visitors: 45000000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.ilovepdf.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'per month',
        features: [
          'Limited access to all PDF tools',
          'Process limited documents per day',
          'Web-only access',
          'Contains ads'
        ],
      },
      {
        name: 'Premium',
        price: '$7',
        billingInfo: 'per month',
        isFeatured: true,
        features: [
          'Full access to all PDF tools',
          'Unlimited document processing',
          'No ads',
          'Access on Web, Desktop & Mobile',
          'Convert scanned PDFs with OCR',
          'Customer support'
        ],
      },
      {
        name: 'Business',
        price: 'Contact Us',
        billingInfo: 'for teams',
        features: [
          'All Premium features',
          'Flexible payment options',
          'Custom contract',
          'Dedicated customer support',
          'Personalized onboarding'
        ],
      }
    ],
    aiInsight: 'iLovePDF captures a massive user base through a classic freemium model, offering a wide range of essential tools for free. Its primary strength lies in its accessibility and ease of use for quick, one-off tasks. The business model relies on converting a small percentage of its high-volume traffic to paid plans for higher limits and advanced features, a strategy proven effective in the utility software market.',
  },
  {
    id: 3,
    name: 'Smallpdf',
    description: 'A beautifully designed suite of online PDF tools focused on simplicity, speed, and a great user experience for all your document needs.',
    longDescription: 'Smallpdf makes handling documents easy with a suite of clever PDF tools. It\'s known for its beautiful design and simplicity, allowing users to quickly solve their PDF problems without needing to install software.',
    website: 'https://smallpdf.com/',
    price: 9,
    priceDisplay: 'Freemium ($9/mo)',
    rating: 4.8,
    visitors: 41000000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsmallpdf.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'per month',
        features: [
          'Access to 20+ PDF tools',
          'Process up to 2 documents per day',
          'Web and Mobile app access'
        ],
      },
      {
        name: 'Pro',
        price: '$9',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'Unlimited document processing',
          'Batch processing',
          'Strong compression',
          'Convert scanned PDFs to Word (OCR)',
          'Desktop app access',
          'No ads',
          'Customer support'
        ],
      },
      {
        name: 'Team',
        price: '$7',
        billingInfo: 'per user / month',
        features: [
          'All Pro features',
          'Easy team management',
          'Onboarding assistance',
          'Volume discount pricing'
        ],
      }
    ],
    aiInsight: "Smallpdf competes directly with iLovePDF by focusing on a superior user experience with a clean, modern interface. Its marketing emphasizes simplicity and speed. The platform's success is tied to strong SEO and a user-friendly design that encourages repeated use for various PDF tasks, effectively funneling users towards its premium subscription for unrestricted access.",
  },
  {
    id: 33,
    name: 'PDF24 Creator',
    description: 'A 100% free and surprisingly powerful suite of online and offline tools that can handle nearly any PDF-related problem, from creating to converting.',
    longDescription: 'PDF24 Creator is a suite of free tools that can be used online or offline to create, convert, edit, and protect PDF files. It is lightweight and offers a wide range of functionalities, making it a popular choice for personal and professional use.',
    website: 'https://tools.pdf24.org/en/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.7,
    visitors: 15000000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftools.pdf24.org%2Fen%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Online Tools',
        price: '$0',
        billingInfo: 'forever',
        isFeatured: true,
        features: [
          'Merge & Split PDFs',
          'Compress & Edit PDFs',
          'Convert PDFs to other formats',
          'Add watermarks and page numbers',
          'Secure & Protect PDFs',
          'No limits on files',
          'Supported by ads'
        ],
      },
      {
        name: 'Free Desktop Creator',
        price: '$0',
        billingInfo: 'forever',
        features: [
          'All online features',
          'Works completely offline',
          'PDF printer for creating PDFs',
          'Screen capture tool',
          '100% free for private and business use'
        ],
      }
    ],
    aiInsight: "PDF24's success comes from offering a comprehensive and reliable set of tools completely for free, supported by advertising. Its high visitor count is driven by strong SEO and word-of-mouth. By maintaining both online and offline versions, it caters to a wide range of user needs, from quick web-based tasks to more integrated desktop workflows.",
  },
  {
    id: 4,
    name: 'Foxit PDF Editor',
    description: 'A powerful, fast, and cost-effective enterprise-grade PDF solution that serves as a direct and capable alternative to Adobe Acrobat.',
    longDescription: 'Foxit PDF Editor is a feature-rich solution for creating, editing, and securing PDF documents. It offers both desktop and cloud-based versions, catering to individual users and large enterprises with its robust toolset.',
    website: 'https://www.foxit.com/pdf-editor/',
    price: 14,
    priceDisplay: '$139/year',
    rating: 4.6,
    visitors: 9500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.foxit.com%2Fpdf-editor%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Editor',
        price: '$14.99',
        billingInfo: 'per month',
        features: [
          'View, print, and share PDFs',
          'Create and convert PDFs',
          'Basic PDF editing',
          'Standard annotation tools'
        ],
      },
      {
        name: 'Editor Pro',
        price: '$16.99',
        billingInfo: 'per month',
        isFeatured: true,
        features: [
          'All Editor features',
          'Advanced PDF editing (audio, video)',
          'Redaction and advanced security',
          'OCR for scanned documents',
          'E-signatures',
          'Cloud integration'
        ],
      },
      {
        name: 'Editor Pro+',
        price: '$17.99',
        billingInfo: 'per month',
        features: [
          'All Editor Pro features',
          'AI-powered features',
          'Smart Redact',
          'Integration with ChatGPT',
          'Unlimited cloud storage'
        ],
      }
    ],
    aiInsight: "Foxit has carved out a significant market share by positioning itself as a cost-effective, one-time purchase alternative to Adobe's subscription model. Its strength is in the enterprise sector, offering robust features and security that rival Acrobat. Future growth depends on its ability to expand its cloud offerings and attract users accustomed to free online tools.",
  },
  {
    id: 8,
    name: 'Sejda',
    description: 'A user-friendly online PDF editor that prioritizes simplicity and privacy, offering a generous free tier for quick document tasks.',
    longDescription: 'Sejda offers a beautifully simple set of online tools for common PDF tasks. The free service is generous with its limits, and the platform is designed to be as straightforward and fast as possible.',
    website: 'https://www.sejda.com/',
    price: 7,
    priceDisplay: 'Freemium ($7.50/mo)',
    rating: 4.6,
    visitors: 8200000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sejda.com%2F?w=500&h=300',
    pricingPlans: [
        {
            name: 'Free',
            price: '$0',
            billingInfo: 'per week',
            features: [
                'Limited to 3 tasks per hour',
                'Files up to 50MB / 200 pages',
                'Web-only access',
                'Files deleted after 2 hours'
            ],
        },
        {
            name: 'Web Week Pass',
            price: '$5',
            billingInfo: 'for 7 days',
            features: [
                'Unlimited tasks',
                'Increased file size limits',
                'Batch processing',
                'No ads or watermarks',
                'Access to all web tools'
            ],
        },
        {
            name: 'Web Monthly',
            price: '$7.50',
            billingInfo: 'per month',
            isFeatured: true,
            features: [
                'All features from Week Pass',
                'Includes Desktop Application',
                'Premium support',
                'Cancel anytime'
            ],
        }
    ],
    aiInsight: "Sejda's focus on privacy, with automatic file deletion after a few hours, is a significant trust signal for users handling sensitive documents. This, combined with a generous free tier and a very clean interface, makes it a strong contender in the online PDF tools space. It directly competes on usability and user trust rather than an exhaustive feature list.",
  },
  {
    id: 6,
    name: 'Soda PDF',
    description: 'A flexible PDF editor offering both powerful desktop software and convenient online tools, known for its unique 3D page-turning view.',
    longDescription: 'Soda PDF offers powerful tools for all your PDF needs. Edit, merge, convert, compress, sign & secure your documents in just a few clicks. Access your files online or work offline with the desktop application.',
    website: 'https://www.sodapdf.com/',
    price: 8,
    priceDisplay: '$8.25/mo',
    rating: 4.4,
    visitors: 6500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sodapdf.com%2F?w=500&h=300',
    pricingPlans: [
        {
            name: 'Standard',
            price: '$6.75',
            billingInfo: 'per month',
            features: [
                'View & Edit PDFs',
                'Create & Convert',
                'Merge & Compress',
                '3D Secure technology'
            ],
        },
        {
            name: 'Pro',
            price: '$8.25',
            billingInfo: 'per month',
            isFeatured: true,
            features: [
                'All Standard features',
                'Secure & Sign PDFs',
                'OCR for scanned documents',
                'Create custom forms',
                'Bates numbering'
            ],
        },
        {
            name: 'Business',
            price: '$16.67',
            billingInfo: 'per month',
            features: [
                'All Pro features',
                'Unlimited E-Signatures',
                'Team collaboration tools',
                'Phone & email support',
                'Volume licensing'
            ],
        }
    ],
    aiInsight: 'Soda PDF differentiates itself by offering both online and desktop applications, providing flexibility for different user preferences. Its unique 3D page-turning feature is a memorable gimmick, but its core value lies in a comprehensive feature set that competes well in the mid-range market. Marketing often focuses on its versatility and cross-platform availability.',
  },
  {
    id: 5,
    name: 'Nitro PDF Pro',
    description: 'A productivity-focused PDF suite for businesses that excels in e-signing, team collaboration, and document analytics.',
    longDescription: 'Nitro PDF Pro is designed to boost productivity for businesses of all sizes. It offers unlimited eSigning, powerful PDF editing, and integrations with popular cloud storage services, making it a strong competitor to Adobe Acrobat.',
    website: 'https://www.gonitro.com/pdf-pro',
    price: 15,
    priceDisplay: '$14.99/mo',
    rating: 4.5,
    visitors: 4500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.gonitro.com%2Fpdf-pro?w=500&h=300',
    pricingPlans: [
        {
            name: 'PDF Pro',
            price: '$14.99',
            billingInfo: 'per user / month',
            isFeatured: true,
            features: [
                'Create & Edit PDF files',
                'Convert to and from Microsoft Office',
                'Unlimited eSigning',
                'Batch processing',
                'Advanced OCR',
                'Redaction for sensitive data',
                'Integrations with Dropbox, Google Drive, etc.'
            ],
        },
        {
            name: 'Business',
            price: 'Contact Us',
            billingInfo: 'for teams > 20',
            features: [
                'All Pro features',
                'Admin tools for user management',
                'Document analytics',
                'Deployment and customization options',
                'Dedicated customer success manager'
            ],
        }
    ],
    aiInsight: "Nitro's strategy centers on productivity and workflow automation, particularly e-signing. It targets businesses looking to digitize their document processes beyond simple PDF editing. The integration of analytics provides a unique value proposition, giving businesses insights into document usage, which is a key differentiator in a crowded market.",
  },
  {
    id: 10,
    name: 'Wondershare PDFelement',
    description: 'An all-in-one PDF editor with a user-friendly interface inspired by Microsoft Office, making it easy for anyone to learn and use.',
    longDescription: 'PDFelement by Wondershare is an easy-to-use yet powerful PDF editor that is a great alternative to Acrobat. It offers a full range of tools, from editing and conversion to OCR and form creation, wrapped in an intuitive, Office-inspired design.',
    website: 'https://pdf.wondershare.com/',
    price: 11,
    priceDisplay: '$10.75/mo',
    rating: 4.5,
    visitors: 3800000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpdf.wondershare.com%2F?w=500&h=300',
    pricingPlans: [
        {
            name: 'Free Trial',
            price: '$0',
            billingInfo: '',
            features: [
                'View and comment on PDFs',
                'Fill forms',
                'Adds a watermark to saved files'
            ],
        },
        {
            name: 'PDFelement Pro',
            price: '$10.75',
            billingInfo: 'per month, billed annually',
            isFeatured: true,
            features: [
                'Edit text, images, and links',
                'Convert to multiple formats',
                'OCR Technology',
                'Create and fill forms',
                'Batch processing',
                'AI-powered tools',
                'Cloud document management',
                'No watermarks'
            ],
        },
        {
            name: 'Team',
            price: '$11.58',
            billingInfo: 'per user / month',
            features: [
                'All Pro features',
                'Volume licensing discounts',
                'Centralized license management',
                'Dedicated team support'
            ],
        }
    ],
    aiInsight: 'PDFelement targets the prosumer and small business market with a product that mirrors the look and feel of Microsoft Office, reducing the learning curve. This familiar design, combined with a powerful feature set at a price point below Adobe, makes it an attractive and accessible option for a large segment of the market.',
  },
  {
    id: 18,
    name: 'PDFescape',
    description: 'A long-standing and reliable free online PDF editor and form filler, offering essential tools directly in your web browser.',
    longDescription: 'PDFescape has long been a popular choice for online PDF editing. It allows you to edit text, add annotations, fill out forms, and create new PDFs directly in your web browser, with an option for more powerful desktop features.',
    website: 'https://www.pdfescape.com/',
    price: 3,
    priceDisplay: 'Freemium ($2.99/mo)',
    rating: 4.2,
    visitors: 3500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.pdfescape.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Online',
        price: '$0',
        billingInfo: '',
        features: [
          'Open & View PDFs',
          'Fill out forms',
          'Annotate & markup',
          'Create basic forms',
          'Password protect',
        ]
      },
      {
        name: 'Premium',
        price: '$2.99',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'All Free features',
          'Edit existing text and images',
          'Convert to Word & other formats',
          'Merge & compress',
          'Larger file size limits (40MB)'
        ]
      },
      {
        name: 'Ultimate',
        price: '$5.99',
        billingInfo: 'per month, billed annually',
        features: [
          'All Premium features',
          'Desktop application access',
          'Professional-grade editing',
          'Redaction & E-signatures',
          'Bates numbering'
        ]
      }
    ],
    aiInsight: 'As one of the older free online PDF editors, PDFescape has a loyal user base and established search engine ranking. Its interface is somewhat dated compared to newer competitors, but its functionality is reliable for basic editing and form filling. It maintains relevance through its free offering and low-cost premium plan.',
  },
  {
    id: 7,
    name: 'PDF-XChange Editor',
    description: 'A remarkably fast and lightweight desktop editor packed with advanced features, favored by power users for its performance and depth.',
    longDescription: 'PDF-XChange Editor is renowned for its speed and extensive feature set, much of which is available in its free version. It\'s an excellent choice for users who need powerful annotation and editing tools without the bloat of other applications.',
    website: 'https://www.tracker-software.com/product/pdf-xchange-editor',
    price: 5,
    priceDisplay: '$56 one-time',
    rating: 4.7,
    visitors: 2800000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.tracker-software.com%2Fproduct%2Fpdf-xchange-editor?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Version',
        price: '$0',
        billingInfo: 'forever',
        features: [
          'View & create PDFs',
          'Extensive annotation & commenting tools',
          'OCR for searchable text',
          'Measure tools',
          'Editing features add a watermark'
        ]
      },
      {
        name: 'Editor License',
        price: '$56',
        billingInfo: 'one-time payment',
        isFeatured: true,
        features: [
          'All free features',
          'Advanced content editing (no watermark)',
          'Create and edit fillable forms',
          'Digital signatures',
          'Combine PDFs',
          'Redaction'
        ]
      },
      {
        name: 'Editor Plus License',
        price: '$72',
        billingInfo: 'one-time payment',
        features: [
          'All Editor features',
          'Create dynamic stamps',
          'Enhanced OCR plugins',
          'Compare documents',
          'SharePoint integration'
        ]
      }
    ],
    aiInsight: "This tool appeals to power users who value performance and a rich feature set without high overhead. Its one-time purchase model is highly attractive to those with subscription fatigue. The user interface is more traditional and less modern, but its speed and depth of features, particularly in the free version, create a loyal user base that values function over form.",
  },
  {
    id: 34,
    name: 'Xodo PDF Reader & Editor',
    description: 'A powerful, cross-platform PDF tool focused on real-time collaboration, annotation, and seamless syncing across all devices.',
    longDescription: 'Xodo is a highly-rated, cross-platform PDF viewer and annotator. It excels at collaborative work, allowing real-time annotation and form filling. It integrates well with various cloud storage services.',
    website: 'https://www.xodo.com/',
    price: 12,
    priceDisplay: 'Freemium ($12/mo)',
    rating: 4.6,
    visitors: 2500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.xodo.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'Cross-platform PDF viewing',
          'Advanced annotation & markup',
          'Form filling',
          'Cloud storage integration'
        ]
      },
      {
        name: 'Xodo Pro',
        price: '$12',
        billingInfo: 'per month',
        isFeatured: true,
        features: [
          'All Free features',
          'Advanced PDF editing',
          'PDF conversion tools',
          'Redaction',
          'License for all platforms (Web, Windows, iOS, Android)',
          'Smart pen for annotations',
          'Increased storage'
        ]
      }
    ],
    aiInsight: 'Xodo has built a strong reputation as a powerful mobile-first PDF tool, with excellent annotation and collaboration features. Its strategic advantage lies in its seamless cross-platform experience (web, Android, iOS, Windows), allowing users to work on documents anywhere. It monetizes through a pro plan that unlocks more advanced editing features.',
  },
  {
    id: 15,
    name: 'DocFly',
    description: 'A quick and simple web-based service for essential PDF tasks like converting, merging, and editing files with a clean, no-fuss interface.',
    longDescription: 'DocFly offers a straightforward web-based service for creating, converting, and editing PDF files. Its clean interface makes it easy to upload a file and perform common tasks like merging, splitting, or converting to Word or JPG.',
    website: 'https://www.docfly.com/',
    price: 4,
    priceDisplay: 'Freemium ($3.99/mo)',
    rating: 4.3,
    visitors: 2300000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.docfly.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'Up to 3 free file exports per month',
          'Online PDF editor',
          'Create & convert PDFs',
          'Merge & split'
        ]
      },
      {
        name: 'Pro',
        price: '$3.99',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'Unlimited exports & downloads',
          'No ads',
          '256-bit SSL encryption',
          'Store files for 24 hours',
          'Batch processing'
        ]
      }
    ],
    aiInsight: 'DocFly is another player in the competitive online PDF tool market. It relies on strong SEO for visibility and a simple, task-oriented interface to retain users. The low monthly price for its premium version makes it an accessible option for users who need more than the free limits but find other subscriptions too expensive.',
  },
  {
    id: 16,
    name: 'LightPDF',
    description: 'An innovative, all-in-one online PDF solution that integrates AI features for summarizing and chatting with your documents.',
    longDescription: 'LightPDF is a web-based platform that provides a full suite of PDF tools, including conversion, editing, and OCR. It differentiates itself with AI-powered features for summarizing documents and chatting with your PDFs.',
    website: 'https://lightpdf.com/',
    price: 6,
    priceDisplay: '$5.83/mo',
    rating: 4.5,
    visitors: 2100000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2Flightpdf.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'Limited access to online tools',
          'AI document chat (with limits)',
          'Basic conversion'
        ]
      },
      {
        name: 'Premium',
        price: '$5.83',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'Unlimited access to all web tools',
          'Desktop version access',
          'Unlimited AI chat and summarization',
          'OCR capabilities',
          'Batch processing',
          'No ads or watermarks'
        ]
      }
    ],
    aiInsight: 'LightPDF is attempting to innovate in the space by integrating AI features, such as document chat and summarization. This is a key differentiator that targets users working with long, complex documents for research or business analysis. Its success will depend on the quality and utility of these AI features compared to emerging competitors.',
  },
  {
    id: 9,
    name: 'PDF Expert',
    description: 'The premier PDF editor for the Apple ecosystem (Mac, iPad, iPhone), known for its speed, beautiful design, and seamless performance.',
    longDescription: 'PDF Expert is a fast, robust, and beautiful PDF editor designed specifically for Apple devices. It allows for easy editing of text, images, and links, as well as providing excellent annotation and form-filling capabilities.',
    website: 'https://pdfexpert.com/',
    price: 7,
    priceDisplay: '$80/year',
    rating: 4.8,
    visitors: 1900000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpdfexpert.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'PDF viewing & reading modes',
          'Annotation & markup tools',
          'Fill out PDF forms',
          'Merge PDFs'
        ]
      },
      {
        name: 'Premium',
        price: '$6.67',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'All Free features',
          'Edit text, images, and links',
          'Redact sensitive information',
          'Convert PDF to other formats',
          'Sign documents',
          'OCR',
          'Cross-device sync for Mac, iPhone, and iPad'
        ]
      }
    ],
    aiInsight: 'By focusing exclusively on the Apple ecosystem, PDF Expert can offer a highly optimized and seamless user experience that cross-platform tools struggle to match. Its success is built on a polished interface and deep integration with macOS and iOS features. This niche focus allows it to command a premium price from a loyal user base that values design and performance.',
  },
  {
    id: 11,
    name: 'PDFsam Basic',
    description: 'A free, open-source, and privacy-focused desktop app that excels at one thing: quickly splitting, merging, and rotating PDF files.',
    longDescription: 'PDFsam Basic (Split and Merge) is a simple, no-frills tool for manipulating PDF documents. It is completely free, works on all major operating systems, and is perfect for users who frequently need to merge or split files.',
    website: 'https://pdfsam.org/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.4,
    visitors: 1600000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpdfsam.org%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Basic',
        price: '$0',
        billingInfo: 'Free & Open Source',
        isFeatured: true,
        features: [
          'Merge PDFs',
          'Split by pages or bookmarks',
          'Rotate pages',
          'Extract pages',
          'Mix PDF files',
          'Privacy focused, works offline'
        ]
      },
      {
        name: 'Enhanced',
        price: '$49',
        billingInfo: 'one-time payment',
        features: [
          'All Basic features',
          'Convert to/from PDF',
          'Edit PDF content',
          'Insert pages and images',
          'Create PDF forms'
        ]
      },
      {
        name: 'Visual',
        price: '$39',
        billingInfo: 'one-time payment',
        features: [
          'Visually reorder, delete pages',
          'Visually compose PDFs',
          'Crop and resize pages',
          'Extract text and images'
        ]
      }
    ],
    aiInsight: "As a free and open-source tool, PDFsam builds trust and serves a specific need for users wary of online services or subscriptions. Its core function is simple document manipulation (splitting and merging). The business model involves upselling users to the enhanced, paid versions which offer more advanced editing and conversion features.",
  },
  {
    id: 35,
    name: 'UPDF',
    description: 'A beautifully designed, modern PDF editor for all major platforms, featuring a delightful user interface and integrated AI tools.',
    longDescription: 'UPDF is a newer entrant that focuses on a beautiful, intuitive user interface across all devices (Windows, Mac, iOS, Android). It offers a full suite of editing, annotating, and converting tools, along with integrated AI features.',
    website: 'https://updf.com/',
    price: 5,
    priceDisplay: 'Freemium ($4.99/mo)',
    rating: 4.7,
    visitors: 1500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fupdf.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'View & annotate PDFs',
          'Limited conversions per day',
          'Adds watermark on save'
        ]
      },
      {
        name: 'Pro',
        price: '$4.99',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'All Free features, without limits',
          'Edit PDF text and images',
          'Unlimited conversions',
          'Advanced OCR',
          'AI Assistant (Summarize, Translate, Explain)',
          'Batch processing',
          'One license for all platforms',
          'No watermarks'
        ]
      }
    ],
    aiInsight: 'UPDF competes by focusing heavily on design and user experience, presenting a modern and more enjoyable alternative to older, more utilitarian interfaces. By offering a single license for all platforms and integrating trendy AI features, it targets younger, tech-savvy users who value aesthetics and cross-device convenience.',
  },
  {
    id: 14,
    name: 'Sumatra PDF',
    description: 'An open-source, minimalist, and blazing-fast PDF reader for Windows. It is extremely lightweight and portable, focusing purely on speed.',
    longDescription: 'Sumatra PDF is a no-nonsense PDF viewer that is portable and lightweight. It starts up instantly and focuses purely on the reading experience, supporting various other formats like ePub, Mobi, and comic books as well.',
    website: 'https://www.sumatrapdfreader.org/free-pdf-reader',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.6,
    visitors: 1300000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.sumatrapdfreader.org%2Ffree-pdf-reader?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'Open Source',
        isFeatured: true,
        features: [
          'Extremely lightweight & fast',
          'Portable application (runs from USB)',
          'Reads PDF, ePub, MOBI, CHM, XPS, DjVu, CBZ, CBR',
          'Clean, minimalist interface'
        ]
      }
    ],
    aiInsight: "Sumatra PDF's core philosophy is minimalism and speed. It serves a user segment that is frustrated with the bloat of mainstream PDF readers. Its appeal lies in its simplicity and portability; it does one thing—displaying documents—and does it exceptionally well and fast. It doesn't try to compete on features but on efficiency.",
  },
   {
    id: 20,
    name: 'FineReader PDF',
    description: 'A professional PDF tool with best-in-class Optical Character Recognition (OCR) for accurately digitizing and converting scanned documents.',
    longDescription: 'ABBYY FineReader PDF is a leader in Optical Character Recognition (OCR) technology. It excels at converting scans and PDFs into editable formats like Word and Excel with unmatched accuracy, making it ideal for digitizing archives.',
    website: 'https://pdf.abbyy.com/finereader-pdf/',
    price: 17,
    priceDisplay: '$199 one-time',
    rating: 4.7,
    visitors: 1200000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpdf.abbyy.com%2Ffinereader-pdf%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Standard',
        price: '$199',
        billingInfo: 'one-time purchase',
        features: [
          'Edit, reuse, and protect PDFs',
          'Create and convert PDFs',
          'Comment and annotate',
          'World-class OCR'
        ]
      },
      {
        name: 'Corporate',
        price: '$299',
        billingInfo: 'one-time purchase',
        isFeatured: true,
        features: [
          'All Standard features',
          'Compare documents in different formats',
          'Automated conversion with Hot Folder',
          '5,000 pages/month for OCR'
        ]
      }
    ],
    aiInsight: "ABBYY's core strength and market differentiator is its world-class OCR technology. It targets professionals and businesses that require high-accuracy document scanning and conversion. While it has full PDF editing features, customers choose FineReader specifically for its OCR capabilities, a reputation built over decades of development.",
  },
  {
    id: 13,
    name: 'Kofax Power PDF',
    description: 'An advanced, business-focused PDF solution emphasizing security, compliance, and powerful workflow automation features like redaction.',
    longDescription: 'Kofax Power PDF is a business-grade tool that offers powerful features for creating, converting, and editing PDFs. It places a strong emphasis on document security, integration, and collaboration within enterprise environments.',
    website: 'https://www.kofax.com/products/power-pdf',
    price: 11,
    priceDisplay: '$129 one-time',
    rating: 4.4,
    visitors: 1000000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kofax.com%2Fproducts%2Fpower-pdf?w=500&h=300',
    pricingPlans: [
      {
        name: 'Standard',
        price: '$129',
        billingInfo: 'one-time purchase',
        features: [
          'Create and convert PDFs',
          'Edit and enhance documents',
          'Assemble documents from various sources',
          'Cloud connectivity'
        ]
      },
      {
        name: 'Advanced',
        price: '$179',
        billingInfo: 'one-time purchase',
        isFeatured: true,
        features: [
          'All Standard features',
          'Advanced security & redaction',
          'Workflow automation',
          'E-Signatures & stamps',
          'Bates numbering'
        ]
      }
    ],
    aiInsight: "Formerly Nuance Power PDF, this tool has a strong legacy in the enterprise space, particularly with its integration of OCR and workflow automation. It competes with Adobe and Foxit for large business contracts by focusing on security, compliance, and features like redaction, which are critical for legal and governmental sectors.",
  },
  {
    id: 32,
    name: 'PDFgear',
    description: 'A shockingly capable and completely free PDF editor that offers a full suite of premium features, including AI integration, without any cost.',
    longDescription: 'PDFgear provides a surprisingly robust set of PDF editing, converting, and annotating tools for free, without watermarks or limitations. It also integrates a ChatGPT-powered copilot to assist with document analysis.',
    website: 'https://www.pdfgear.com/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.8,
    visitors: 950000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.pdfgear.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Completely Free',
        price: '$0',
        billingInfo: 'no ads, no limits',
        isFeatured: true,
        features: [
          'Full PDF editing suite (text, images)',
          'AI Copilot (summarize, chat)',
          'Convert to/from multiple formats',
          'OCR capabilities',
          'Form filling & creation',
          'No watermarks or limitations',
          'Batch processing',
          'Digital signatures'
        ]
      }
    ],
    aiInsight: "PDFgear's strategy is highly disruptive: offering a premium-level feature set, including AI integration, for free. This approach aims to rapidly capture market share from established freemium and paid competitors by removing the price barrier entirely. Its long-term viability will depend on its monetization strategy, which is currently unclear.",
  },
  {
    id: 22,
    name: 'EaseUS PDF Editor',
    description: 'A reliable all-in-one Windows PDF editor from a trusted software brand, offering a complete set of tools for editing, converting, and securing files.',
    longDescription: 'EaseUS PDF Editor provides a comprehensive set of tools in a user-friendly package for Windows users. It handles everything from simple edits and annotations to OCR and document encryption.',
    website: 'https://www.easeus.com/pdf-editor/index.html',
    price: 7,
    priceDisplay: '$79/year',
    rating: 4.3,
    visitors: 850000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.easeus.com%2Fpdf-editor%2Findex.html?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Trial',
        price: '$0',
        billingInfo: '',
        features: [
          'Read, Create, View PDFs',
          'Basic annotation',
          'Adds watermark on save'
        ]
      },
      {
        name: 'Pro Version',
        price: '$6.59',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'All trial features without watermark',
          'Edit text, images & links',
          'Convert & create PDFs',
          'Merge & split',
          'OCR support',
          'Password protection & encryption'
        ]
      }
    ],
    aiInsight: 'EaseUS is a well-known brand in the utility software space (data recovery, partition management). They leverage this brand recognition to market their PDF editor. The product itself is a solid, all-around editor that competes on price and brand trust with a large, existing customer base.',
  },
  {
    id: 24,
    name: 'PDF Architect',
    description: 'A unique, modular PDF solution that lets you build your own editor by purchasing only the specific features you need, like editing or OCR.',
    longDescription: 'PDF Architect uses a unique modular system. Start with the free creator and viewer, and add modules for editing, converting, or signing as you need them. It\'s a flexible and cost-effective way to get the exact PDF features you want.',
    website: 'https://www.pdfarchitect.org/',
    price: 6,
    priceDisplay: 'From $69/year',
    rating: 4.3,
    visitors: 700000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.pdfarchitect.org%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: '',
        features: [
          'Create PDFs from 300+ formats',
          'PDF viewer',
          'Rotate & delete pages'
        ]
      },
      {
        name: 'Standard',
        price: '$5.75',
        billingInfo: 'per month, billed annually',
        features: [
          'All Free features',
          'Edit & convert modules',
          'Page manipulation module'
        ]
      },
      {
        name: 'Pro',
        price: '$7.42',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'All Standard features',
          'Secure & sign module',
          'Review & comment module',
          'Forms module'
        ]
      },
      {
        name: 'Pro + OCR',
        price: '$9.08',
        billingInfo: 'per month, billed annually',
        features: [
          'All Pro features',
          'Advanced OCR module'
        ]
      }
    ],
    aiInsight: 'The modular approach is PDF Architect\'s key selling point. It allows users to pay for only the features they need, making it a potentially cheaper alternative to all-in-one suites. This "build-your-own" model appeals to budget-conscious individuals and small businesses who may not need the full feature set of more expensive competitors.',
  },
  {
    id: 21,
    name: 'Able2Extract Professional',
    description: 'A specialized conversion tool focused on accurately extracting data from PDFs into editable formats like Excel, Word, and AutoCAD.',
    longDescription: 'Able2Extract Professional is a specialized tool for converting PDFs to formats like Excel, Word, and AutoCAD. Its strength lies in its precise conversion of complex tables and layouts, preserving the original structure.',
    website: 'https://www.investintech.com/prod_a2e.htm',
    price: 12,
    priceDisplay: '$149 one-time',
    rating: 4.4,
    visitors: 500000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.investintech.com%2Fprod_a2e.htm?w=500&h=300',
    pricingPlans: [
      {
        name: 'Professional License',
        price: '$149.95',
        billingInfo: 'one-time purchase',
        isFeatured: true,
        features: [
          'Custom PDF to Excel conversion',
          'PDF to Word, PowerPoint, AutoCAD, etc.',
          'Batch conversion',
          'Create & edit PDFs',
          'OCR engine',
          'PDF annotations & redaction',
          'Fill & create forms'
        ]
      }
    ],
    aiInsight: 'This tool has a very specific target audience: users who need to extract data from PDFs into structured formats, especially Excel spreadsheets. Its marketing and feature set are heavily focused on the quality of these conversions. This specialization allows it to compete effectively against more general-purpose PDF editors.',
  },
  {
    id: 36,
    name: 'SwifDoo PDF',
    description: 'A fast and lightweight all-in-one PDF software for Windows that offers comprehensive features without slowing down your computer.',
    longDescription: 'SwifDoo PDF is a lightweight all-in-one PDF software that provides a full range of features including editing, converting, compressing, and signing. It aims to be a fast and responsive solution for Windows users.',
    website: 'https://www.swifdoo.com/',
    price: 6,
    priceDisplay: '$5.75/mo',
    rating: 4.3,
    visitors: 450000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.swifdoo.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Trial',
        price: '$0',
        billingInfo: '',
        features: [
          '7-day free trial',
          'Access to all features',
          'Slight limitations on output'
        ]
      },
      {
        name: 'Pro',
        price: '$5.75',
        billingInfo: 'per month, billed annually',
        isFeatured: true,
        features: [
          'Lightweight & fast performance',
          'Full PDF editing',
          'E-Signatures',
          'Document translation',
          'Whiteout & redaction',
          'Convert to/from multiple formats'
        ]
      }
    ],
    aiInsight: 'SwifDoo targets the Windows user market by emphasizing its lightweight nature and speed, a direct response to the perceived bloat of larger applications like Adobe Acrobat. It packs a comprehensive feature set at a competitive price point, appealing to users looking for a capable yet efficient PDF solution without high system resource usage.',
  },
  {
    id: 29,
    name: 'Evince',
    description: 'The standard, open-source document viewer for the GNOME desktop environment on Linux, offering solid and reliable performance.',
    longDescription: 'Evince is a document viewer that supports multiple file formats including PDF, PostScript, and DjVu. It is designed to integrate well with the GNOME desktop and provides features like search, printing, and encrypted file viewing.',
    website: 'https://wiki.gnome.org/Apps/Evince',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.2,
    visitors: 420000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwiki.gnome.org%2FApps%2FEvince?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'Open Source',
        isFeatured: true,
        features: [
          'Default GNOME document viewer',
          'Supports PDF, PostScript, DjVu, TIFF, DVI',
          'Search & print',
          'Basic annotations',
          'Encrypted file viewing'
        ]
      }
    ],
    aiInsight: 'Similar to Preview on macOS, Evince is the default document viewer for the popular GNOME desktop on Linux. Its development is focused on solid performance and tight integration with the operating system. As a core part of the open-source desktop experience, it serves as the baseline for document viewing for millions of Linux users.',
  },
  {
    id: 37,
    name: 'Master PDF Editor',
    description: 'A function-first, cross-platform PDF editor with excellent support for Linux, making it a favorite among technical users and developers.',
    longDescription: 'Master PDF Editor is a cross-platform application that is particularly popular among Linux users. It offers a solid set of features for creating, editing, encrypting, and signing PDF documents, with a focus on functionality over flashy design.',
    website: 'https://code-industry.net/master-pdf-editor/',
    price: 7,
    priceDisplay: '$80 one-time',
    rating: 4.4,
    visitors: 380000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fcode-industry.net%2Fmaster-pdf-editor%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free Version',
        price: '$0',
        billingInfo: '',
        features: [
          'Basic viewing and printing',
          'Adds a watermark for most editing functions'
        ]
      },
      {
        name: 'Commercial License',
        price: '$80',
        billingInfo: 'one-time purchase',
        isFeatured: true,
        features: [
          'Excellent Linux support',
          'Edit text & objects',
          'PDF form creation',
          '256-bit encryption',
          'Digital signatures',
          'No watermarks'
        ]
      }
    ],
    aiInsight: 'Master PDF Editor has secured a loyal following by being one of the most capable and reliable PDF editors available for the Linux operating system, a market often underserved by major commercial developers. Its one-time purchase model and straightforward, function-first approach appeal strongly to the developer and technical user community.',
  },
  {
    id: 30,
    name: 'Okular',
    description: 'A powerful, open-source universal document viewer from the KDE community (Linux) with an exceptionally advanced annotation system.',
    longDescription: 'Okular is a multi-platform document viewer for KDE that can read a wide variety of formats like PDF, ePub, and various image formats. It has a strong focus on annotations, allowing users to add comments, highlights, and even draw.',
    website: 'https://okular.kde.org/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.4,
    visitors: 320000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fokular.kde.org%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'Open Source',
        isFeatured: true,
        features: [
          'KDE Desktop integration',
          'Universal document viewer (PDF, ePub, etc.)',
          'Advanced annotation system',
          'Form filling',
          'Digital signature verification'
        ]
      }
    ],
    aiInsight: 'Okular is the counterpart to Evince in the KDE Linux desktop world. It distinguishes itself with a more extensive feature set, particularly its powerful and versatile annotation system. It appeals to users who want more than just a viewer and prefer a feature-rich application that is still free and open-source.',
  },
  {
    id: 28,
    name: 'MuPDF',
    description: 'An ultra-lightweight, open-source PDF viewer and toolkit prized by developers for its speed, high-fidelity rendering, and command-line tools.',
    longDescription: 'MuPDF is a free and open-source software framework for viewing documents. It is known for its high-quality anti-aliased graphics rendering and its small footprint, making it ideal for embedded systems or users who value speed above all.',
    website: 'https://mupdf.com/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.3,
    visitors: 280000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmupdf.com%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'Open Source',
        isFeatured: true,
        features: [
          'Extremely lightweight & fast',
          'High-fidelity rendering',
          'Command-line tools for scripting',
          'Supports multiple document formats',
          'Software library for developers'
        ]
      }
    ],
    aiInsight: 'MuPDF is less of a consumer application and more of a rendering engine that other applications can be built upon. Its primary users are developers and highly technical users who appreciate its speed, accuracy, and command-line capabilities. Its influence is seen more in the products that use its library than in its own standalone viewer.',
  },
  {
    id: 27,
    name: 'Skim',
    description: 'A free, open-source PDF reader and note-taker for macOS, specifically designed for reading and annotating scientific papers.',
    longDescription: 'Skim is an open-source tool geared towards reading and annotating scientific papers in PDF format. It features powerful note-taking capabilities, including highlighted text notes and anchored notes.',
    website: 'https://skim-app.sourceforge.io/',
    price: 0,
    priceDisplay: 'Free',
    rating: 4.5,
    visitors: 180000,
    imageUrl: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fskim-app.sourceforge.io%2F?w=500&h=300',
    pricingPlans: [
      {
        name: 'Free',
        price: '$0',
        billingInfo: 'Open Source',
        isFeatured: true,
        features: [
          'Designed for macOS',
          'Advanced note-taking for academia',
          'Highlighting tools',
          'Reading bar for focus',
          'AppleScript support'
        ]
      }
    ],
    aiInsight: 'Skim is a niche, open-source tool that caters specifically to the academic community on macOS. Its features are tailored for reading and annotating research papers. It thrives not as a commercial product, but as a community-supported tool that solves a specific set of problems for academics better than many general-purpose editors.',
  }
];
