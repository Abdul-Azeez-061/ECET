// ============================================================
//  ECET Mock Test – Unified Script
//  Reads ?subject=ds|cn|os from the URL and loads the right bank
// ============================================================

// Security
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')) e.preventDefault();
});

// ── Question Banks ──────────────────────────────────────────

const QUESTIONS_DS = [
{question:"Which sorting algorithm repeatedly compares adjacent elements?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:"Bubble Sort"},
{question:"Binary Search works only on",options:["Unsorted data","Sorted data","Random data","Dynamic data"],answer:"Sorted data"},
{question:"Which of the following is a non-linear data structure?",options:["Stack","Queue","Tree","Array"],answer:"Tree"},
{question:"Each node in a linked list contains",options:["Data only","Pointer only","Data and pointer","Address only"],answer:"Data and pointer"},
{question:"The time complexity of Binary Search is",options:["O(n²)","O(n)","O(log n)","O(1)"],answer:"O(log n)"},
{question:"Which operation means visiting every node in a linked list?",options:["Insertion","Traversal","Searching","Deletion"],answer:"Traversal"},
{question:"Which of the following is a linear data structure?",options:["Graph","Tree","Stack","Network"],answer:"Stack"},
{question:"Which sorting algorithm uses a pivot element?",options:["Bubble Sort","Selection Sort","Quick Sort","Insertion Sort"],answer:"Quick Sort"},
{question:"Space Complexity measures",options:["Time taken by program","Memory used by program","Number of instructions","Program size"],answer:"Memory used by program"},
{question:"Which searching technique checks elements one by one?",options:["Binary Search","Linear Search","Tree Search","Quick Search"],answer:"Linear Search"},
{question:"The last node in a singly linked list contains",options:["First node address","NULL pointer","Middle node","Data only"],answer:"NULL pointer"},
{question:"Which sorting algorithm selects the smallest element each pass?",options:["Selection Sort","Bubble Sort","Merge Sort","Quick Sort"],answer:"Selection Sort"},
{question:"Data structures are mainly classified into",options:["Primitive and Non-Primitive","Static and Dynamic","Linear and Binary","Basic and Advanced"],answer:"Primitive and Non-Primitive"},
{question:"Linked list elements are stored in",options:["Continuous memory","Random memory locations","Stack memory","Fixed memory"],answer:"Random memory locations"},
{question:"Which sorting algorithm uses divide and conquer technique?",options:["Bubble Sort","Selection Sort","Merge Sort","Insertion Sort"],answer:"Merge Sort"},
{question:"Time Complexity measures",options:["Memory usage","Program size","Execution time","Data size"],answer:"Execution time"},
{question:"Which operation adds a node to a linked list?",options:["Deletion","Insertion","Traversal","Searching"],answer:"Insertion"},
{question:"Example of primitive data structure",options:["Linked List","Stack","Integer","Tree"],answer:"Integer"},
{question:"Which sorting algorithm inserts element in correct position?",options:["Insertion Sort","Bubble Sort","Selection Sort","Merge Sort"],answer:"Insertion Sort"},
{question:"Binary search reduces the problem size by",options:["One element","Half","Double","Triple"],answer:"Half"},
{question:"Which linked list allows traversal both directions?",options:["Singly Linked List","Circular Linked List","Doubly Linked List","Linear List"],answer:"Doubly Linked List"},
{question:"Which operation removes a node from a linked list?",options:["Insertion","Traversal","Deletion","Searching"],answer:"Deletion"},
{question:"Linear Search time complexity is",options:["O(n)","O(log n)","O(n²)","O(1)"],answer:"O(n)"},
{question:"Merge Sort time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:"O(n log n)"},
{question:"Linked list size is",options:["Fixed","Dynamic","Constant","Static"],answer:"Dynamic"},
{question:"Which data structure follows LIFO principle?",options:["Queue","Stack","Array","Tree"],answer:"Stack"},
{question:"O(1) time complexity means",options:["Constant time","Linear time","Log time","Quadratic time"],answer:"Constant time"},
{question:"Which of the following is not a linear data structure?",options:["Array","Queue","Stack","Tree"],answer:"Tree"},
{question:"Quick Sort average time complexity is",options:["O(n²)","O(n log n)","O(n)","O(log n)"],answer:"O(n log n)"},
{question:"The first node of a linked list is called",options:["Tail","Node","Head","Pointer"],answer:"Head"},
{question:"Stack follows which principle?",options:["FIFO","LIFO","LILO","FILO"],answer:"LIFO"},
{question:"Insertion in stack is called",options:["Push","Pop","Insert","Delete"],answer:"Push"},
{question:"Deletion in stack is called",options:["Remove","Push","Pop","Delete"],answer:"Pop"},
{question:"Stack pointer is called",options:["Front","Rear","Top","Head"],answer:"Top"},
{question:"Stack overflow occurs when",options:["Stack is empty","Stack is full","Stack is half full","Stack has elements"],answer:"Stack is full"},
{question:"Stack underflow occurs when",options:["Stack is empty","Stack is full","Stack has elements","Stack is large"],answer:"Stack is empty"},
{question:"The operation used to view top element is",options:["Push","Pop","Peek","Delete"],answer:"Peek"},
{question:"Time complexity of push operation",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:"O(1)"},
{question:"Stack is used in",options:["Recursion","Searching","Sorting","Traversal"],answer:"Recursion"},
{question:"Stack can be implemented using",options:["Array","Linked list","Both A and B","None"],answer:"Both A and B"},
{question:"Queue follows which principle?",options:["FIFO","LIFO","FILO","LILO"],answer:"FIFO"},
{question:"Insertion operation in queue is called",options:["Dequeue","Push","Enqueue","Pop"],answer:"Enqueue"},
{question:"Deletion operation in queue is called",options:["Enqueue","Dequeue","Push","Delete"],answer:"Dequeue"},
{question:"In queue insertion takes place at",options:["Front","Rear","Middle","Top"],answer:"Rear"},
{question:"In queue deletion takes place at",options:["Front","Rear","Middle","End"],answer:"Front"},
{question:"Queue overflow occurs when",options:["Queue is empty","Queue is full","Queue has elements","Queue has two elements"],answer:"Queue is full"},
{question:"Queue underflow occurs when",options:["Queue is full","Queue is empty","Queue has elements","Queue has many elements"],answer:"Queue is empty"},
{question:"Circular queue is used to",options:["Reduce memory","Reuse empty spaces","Increase memory","Delete nodes"],answer:"Reuse empty spaces"},
{question:"Queue can be implemented using",options:["Array","Linked list","Both A and B","Tree"],answer:"Both A and B"},
{question:"Time complexity of enqueue operation is",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:"O(1)"},
{question:"Which of the following is a non-linear data structure?",options:["Array","Linked List","Tree","Stack"],answer:"Tree"},
{question:"The topmost node of a tree is called:",options:["Leaf","Root","Parent","Child"],answer:"Root"},
{question:"A node with no children is called:",options:["Parent node","Root node","Leaf node","Internal node"],answer:"Leaf node"},
{question:"A tree with n nodes contains how many edges?",options:["n","n + 1","n − 1","n²"],answer:"n − 1"},
{question:"Maximum number of children a node can have in a binary tree is:",options:["1","2","3","Unlimited"],answer:"2"},
{question:"In a Binary Search Tree, left subtree contains:",options:["Greater values","Smaller values","Equal values","Random values"],answer:"Smaller values"},
{question:"In BST, right subtree contains:",options:["Smaller values","Greater values","Equal values","Random values"],answer:"Greater values"},
{question:"Which traversal gives sorted output in BST?",options:["Preorder","Postorder","Inorder","Level order"],answer:"Inorder"},
{question:"Preorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Right → Left → Root"],answer:"Root → Left → Right"},
{question:"Postorder traversal order is:",options:["Root → Left → Right","Left → Root → Right","Left → Right → Root","Root → Right → Left"],answer:"Left → Right → Root"},
{question:"In a full binary tree, each node has:",options:["0 or 2 children","Only 1 child","Maximum 3 children","Unlimited children"],answer:"0 or 2 children"},
{question:"Which operation is used to add a node in BST?",options:["Search","Insert","Delete","Traverse"],answer:"Insert"},
{question:"Which operation removes a node in BST?",options:["Insert","Search","Delete","Traverse"],answer:"Delete"},
{question:"Searching in BST starts from:",options:["Leaf node","Root node","Parent node","Any node"],answer:"Root node"},
{question:"Which data structure represents hierarchical relationships?",options:["Stack","Queue","Tree","Array"],answer:"Tree"},
{question:"A graph consists of:",options:["Nodes and edges","Vertices and edges","Links and lists","Arrays and pointers"],answer:"Vertices and edges"},
{question:"In graph terminology, a node is also called:",options:["Vertex","Edge","Link","Path"],answer:"Vertex"},
{question:"An edge connects two:",options:["Vertices","Arrays","Nodes of linked list","Stacks"],answer:"Vertices"},
{question:"Which traversal technique is used in graphs?",options:["DFS","BFS","Both DFS and BFS","None"],answer:"Both DFS and BFS"},
{question:"A graph with no cycles is called:",options:["Tree","Binary tree","Directed graph","Complete graph"],answer:"Tree"}
];

const QUESTIONS_CN = [
{question:"OSI model has how many layers?",options:["4","5","6","7"],answer:"7"},
{question:"Which layer of OSI is responsible for routing?",options:["Data Link","Transport","Network","Session"],answer:"Network"},
{question:"TCP stands for",options:["Transfer Control Protocol","Transmission Control Protocol","Transport Control Process","Terminal Control Protocol"],answer:"Transmission Control Protocol"},
{question:"UDP stands for",options:["User Data Protocol","Universal Datagram Protocol","User Datagram Protocol","Unified Data Process"],answer:"User Datagram Protocol"},
{question:"Which protocol is connection-oriented?",options:["UDP","TCP","ICMP","ARP"],answer:"TCP"},
{question:"IP address version 4 has how many bits?",options:["16","32","64","128"],answer:"32"},
{question:"IPv6 address has how many bits?",options:["32","64","128","256"],answer:"128"},
{question:"DNS stands for",options:["Domain Name System","Data Network Service","Domain Network Standard","Direct Name Server"],answer:"Domain Name System"},
{question:"DNS resolves",options:["IP to MAC","Domain names to IP addresses","IP to domain","URL to email"],answer:"Domain names to IP addresses"},
{question:"HTTP stands for",options:["HyperText Transfer Protocol","HyperText Transport Process","High Text Transfer Protocol","Host Transfer Protocol"],answer:"HyperText Transfer Protocol"},
{question:"HTTPS adds which security feature?",options:["Faster speed","Encryption via SSL/TLS","Compression","DNS lookup"],answer:"Encryption via SSL/TLS"},
{question:"Which layer handles physical transmission of bits?",options:["Network","Data Link","Session","Physical"],answer:"Physical"},
{question:"MAC address is used at which layer?",options:["Network","Transport","Data Link","Physical"],answer:"Data Link"},
{question:"Which device operates at the Network layer?",options:["Hub","Switch","Router","Repeater"],answer:"Router"},
{question:"Which device operates at the Data Link layer?",options:["Hub","Router","Switch","Repeater"],answer:"Switch"},
{question:"Which device operates at the Physical layer?",options:["Router","Switch","Hub","Gateway"],answer:"Hub"},
{question:"FTP stands for",options:["File Transfer Protocol","Fast Transfer Protocol","File Transport Process","Frame Transfer Protocol"],answer:"File Transfer Protocol"},
{question:"SMTP is used for",options:["Receiving email","Sending email","File transfer","Web browsing"],answer:"Sending email"},
{question:"POP3 is used for",options:["Sending email","Receiving email","File transfer","DNS lookup"],answer:"Receiving email"},
{question:"Which protocol assigns IP addresses automatically?",options:["DNS","FTP","DHCP","SMTP"],answer:"DHCP"},
{question:"DHCP stands for",options:["Dynamic Host Configuration Protocol","Direct Host Control Protocol","Dynamic Host Control Process","Domain Host Config Protocol"],answer:"Dynamic Host Configuration Protocol"},
{question:"Ping uses which protocol?",options:["TCP","UDP","ICMP","ARP"],answer:"ICMP"},
{question:"ARP resolves",options:["IP to MAC address","MAC to IP address","Domain to IP","IP to domain"],answer:"IP to MAC address"},
{question:"Which port does HTTP use?",options:["21","23","80","443"],answer:"80"},
{question:"Which port does HTTPS use?",options:["80","21","443","25"],answer:"443"},
{question:"Which port does FTP use?",options:["80","21","25","110"],answer:"21"},
{question:"Which port does SMTP use?",options:["110","80","443","25"],answer:"25"},
{question:"Which port does DNS use?",options:["53","80","443","21"],answer:"53"},
{question:"Bandwidth means",options:["Data transfer speed","Disk space","Latency","Signal strength"],answer:"Data transfer speed"},
{question:"Latency means",options:["Data speed","Delay in data transmission","Bandwidth","Signal power"],answer:"Delay in data transmission"},
{question:"A subnet mask identifies",options:["Network and host portions","MAC address","Routing path","Gateway address"],answer:"Network and host portions"},
{question:"Default gateway is",options:["The exit point to another network","The DNS server","The mail server","The web server"],answer:"The exit point to another network"},
{question:"Firewall is used to",options:["Increase speed","Filter network traffic","Assign IP addresses","Resolve domain names"],answer:"Filter network traffic"},
{question:"VPN stands for",options:["Virtual Private Network","Virtual Protocol Node","Variable Public Network","Verified Private Node"],answer:"Virtual Private Network"},
{question:"VPN provides",options:["Faster internet","Secure encrypted connection","More bandwidth","Free internet"],answer:"Secure encrypted connection"},
{question:"Which topology connects all devices to a central hub?",options:["Ring","Bus","Star","Mesh"],answer:"Star"},
{question:"Which topology connects all nodes in a closed loop?",options:["Star","Bus","Ring","Mesh"],answer:"Ring"},
{question:"In bus topology all devices share",options:["A single cable","Star switch","Ring loop","Mesh links"],answer:"A single cable"},
{question:"Mesh topology provides",options:["Single path","No redundancy","Multiple paths and redundancy","One central node"],answer:"Multiple paths and redundancy"},
{question:"Full duplex communication means",options:["One way only","Two way alternately","Two way simultaneously","No communication"],answer:"Two way simultaneously"},
{question:"Half duplex means",options:["Two way simultaneously","One way only","Two way alternately","No signal"],answer:"Two way alternately"},
{question:"OSI Transport layer provides",options:["Routing","Physical transmission","End-to-end communication","Session management"],answer:"End-to-end communication"},
{question:"Which OSI layer is responsible for encryption?",options:["Network","Transport","Presentation","Session"],answer:"Presentation"},
{question:"Which OSI layer manages sessions?",options:["Transport","Network","Presentation","Session"],answer:"Session"},
{question:"Checksum is used for",options:["Routing","Error detection","Encryption","Addressing"],answer:"Error detection"},
{question:"CRC stands for",options:["Cyclic Redundancy Check","Cyclic Routing Code","Central Registry Control","Cyclic Record Check"],answer:"Cyclic Redundancy Check"},
{question:"Flow control manages",options:["Routing paths","Rate of data transmission","IP addressing","DNS resolution"],answer:"Rate of data transmission"},
{question:"Congestion control manages",options:["IP conflicts","Network overload","DNS errors","MAC collisions"],answer:"Network overload"},
{question:"CSMA/CD is used in",options:["Token Ring","WiFi","Ethernet","Bluetooth"],answer:"Ethernet"},
{question:"CSMA/CA is used in",options:["Ethernet","Wired LAN","WiFi (Wireless LAN)","Token Bus"],answer:"WiFi (Wireless LAN)"},
{question:"WAN stands for",options:["Wide Area Network","Wireless Access Node","Web Access Network","Wide Access Node"],answer:"Wide Area Network"},
{question:"LAN stands for",options:["Local Area Network","Large Area Node","Long Access Network","Linked Area Node"],answer:"Local Area Network"},
{question:"MAN stands for",options:["Metropolitan Area Network","Major Access Node","Multi Area Net","Main Area Network"],answer:"Metropolitan Area Network"},
{question:"Which protocol is used for secure remote login?",options:["FTP","Telnet","SSH","HTTP"],answer:"SSH"},
{question:"Telnet uses which port?",options:["22","23","80","443"],answer:"23"},
{question:"SSH uses which port?",options:["23","21","22","25"],answer:"22"},
{question:"NAT stands for",options:["Network Address Translation","Node Access Table","Network Access Terminal","Null Address Table"],answer:"Network Address Translation"},
{question:"NAT is used to",options:["Translate private IPs to public IPs","Resolve domain names","Assign MAC addresses","Encrypt data"],answer:"Translate private IPs to public IPs"},
{question:"Which protocol sends error messages?",options:["TCP","UDP","ICMP","ARP"],answer:"ICMP"},
{question:"RIP stands for",options:["Routing Information Protocol","Remote IP Protocol","Ring IP Process","Routing IP Path"],answer:"Routing Information Protocol"},
{question:"OSPF stands for",options:["Open Shortest Path First","Open System Path Forwarding","Object Shortest Path First","Open Source Protocol Form"],answer:"Open Shortest Path First"},
{question:"BGP is used for",options:["Routing within LAN","Routing between autonomous systems","WiFi security","Email transfer"],answer:"Routing between autonomous systems"},
{question:"Which protocol is used for web browsing?",options:["FTP","SMTP","HTTP","Telnet"],answer:"HTTP"},
{question:"Which is a connectionless protocol?",options:["TCP","HTTP","FTP","UDP"],answer:"UDP"},
{question:"3-way handshake is used in",options:["UDP","ARP","TCP connection establishment","ICMP"],answer:"TCP connection establishment"},
{question:"Which class of IP address starts with 192.168.x.x?",options:["Class A","Class B","Class C","Class D"],answer:"Class C"},
{question:"Class A IP addresses start with",options:["0-127","128-191","192-223","224-239"],answer:"0-127"},
{question:"Loopback address is",options:["192.168.0.1","10.0.0.1","127.0.0.1","172.16.0.1"],answer:"127.0.0.1"},
{question:"Which layer adds a header AND trailer?",options:["Network","Transport","Data Link","Physical"],answer:"Data Link"},
{question:"Encapsulation means",options:["Adding headers at each OSI layer","Removing headers","Encrypting data","Compressing data"],answer:"Adding headers at each OSI layer"},
{question:"Decapsulation happens at",options:["Sender side","Receiver side","Router","Switch"],answer:"Receiver side"}
];

const QUESTIONS_OS = [
{question:"What is an Operating System?",options:["Application software","System software","Programming language","Compiler"],answer:"System software"},
{question:"A process is",options:["Program in disk","Program in execution","Program compiled","Program in ROM"],answer:"Program in execution"},
{question:"PCB stands for",options:["Process Control Block","Program Control Block","Process Code Block","Program Code Block"],answer:"Process Control Block"},
{question:"The smallest unit of execution is",options:["Process","Thread","Program","File"],answer:"Thread"},
{question:"Which OS allows multiple users at the same time?",options:["Batch OS","Multi-user OS","Single user OS","Real-time OS"],answer:"Multi-user OS"},
{question:"Batch OS executes",options:["Programs randomly","Jobs in groups","Programs in parallel","Files sequentially"],answer:"Jobs in groups"},
{question:"Spooling mainly uses",options:["RAM","Disk","CPU","Cache"],answer:"Disk"},
{question:"Buffering temporarily stores data in",options:["RAM","Disk","CPU","Register"],answer:"RAM"},
{question:"Multiprogramming improves",options:["CPU utilization","Disk speed","Network speed","RAM size"],answer:"CPU utilization"},
{question:"Which scheduling algorithm executes processes in arrival order?",options:["SJF","FCFS","Round Robin","Priority"],answer:"FCFS"},
{question:"Which algorithm gives minimum average waiting time?",options:["SJF","FCFS","Round Robin","Priority"],answer:"SJF"},
{question:"Round Robin scheduling uses",options:["Priority","Time quantum","Disk speed","Memory size"],answer:"Time quantum"},
{question:"Context switching means",options:["Process creation","CPU switching between processes","Process deletion","Memory allocation"],answer:"CPU switching between processes"},
{question:"Throughput means",options:["Number of completed processes","Waiting time","CPU idle time","Response time"],answer:"Number of completed processes"},
{question:"Waiting time means",options:["Time spent in ready queue","CPU execution time","Disk time","Response time"],answer:"Time spent in ready queue"},
{question:"Response time means",options:["Time to first response","Completion time","CPU time","Waiting time"],answer:"Time to first response"},
{question:"Semaphore is used for",options:["Memory allocation","Process synchronization","File management","Disk scheduling"],answer:"Process synchronization"},
{question:"Binary semaphore values are",options:["0 and 1","0 to 10","1 to 100","-1 to 1"],answer:"0 and 1"},
{question:"IPC stands for",options:["Inter Process Communication","Internal Program Control","Input Process Control","Internal Process Communication"],answer:"Inter Process Communication"},
{question:"Deadlock occurs when",options:["Processes wait forever for resources","CPU stops","Disk fails","Memory overflow"],answer:"Processes wait forever for resources"},
{question:"How many conditions are required for deadlock?",options:["2","3","4","5"],answer:"4"},
{question:"Which is a deadlock condition?",options:["Mutual exclusion","Circular wait","Hold and wait","All of these"],answer:"All of these"},
{question:"Banker's algorithm is used for",options:["Deadlock prevention","Deadlock avoidance","Deadlock detection","Process scheduling"],answer:"Deadlock avoidance"},
{question:"Fragmentation means",options:["Wasted memory space","Memory allocation","CPU scheduling","Disk failure"],answer:"Wasted memory space"},
{question:"External fragmentation occurs when",options:["Free memory is scattered","Memory block is larger than required","CPU idle","Disk error"],answer:"Free memory is scattered"},
{question:"Paging divides memory into",options:["Pages and frames","Segments and blocks","Files and folders","Tracks and sectors"],answer:"Pages and frames"},
{question:"Segmentation divides program into",options:["Logical parts","Blocks","Pages","Frames"],answer:"Logical parts"},
{question:"Virtual memory uses",options:["Disk as extra memory","CPU as memory","Cache as disk","RAM as disk"],answer:"Disk as extra memory"},
{question:"Demand paging loads pages",options:["When required","At program start","Randomly","After execution"],answer:"When required"},
{question:"When required page is not in memory",options:["Page hit occurs","Page fault occurs","Disk crash occurs","CPU failure"],answer:"Page fault occurs"},
{question:"Page replacement is needed when",options:["Memory is full","Disk is full","CPU busy","RAM empty"],answer:"Memory is full"},
{question:"FIFO page replacement means",options:["First page removed first","Last page removed","Random page removed","New page removed"],answer:"First page removed first"},
{question:"LRU stands for",options:["Least Recently Used","Last Random Use","Longest Running Unit","Least Resource Usage"],answer:"Least Recently Used"},
{question:"Which page replacement algorithm is best theoretically?",options:["FIFO","Optimal","LRU","Random"],answer:"Optimal"},
{question:"Thrashing occurs when",options:["Too many page faults","CPU idle","Disk failure","Network slow"],answer:"Too many page faults"},
{question:"Disk scheduling is used to",options:["Decide order of disk requests","Manage memory","Schedule CPU","Allocate files"],answer:"Decide order of disk requests"},
{question:"Disk performance parameter includes",options:["Seek time","Rotational latency","Transfer time","All of these"],answer:"All of these"},
{question:"Seek time means",options:["Time for disk head movement","Time for CPU execution","File reading time","RAM allocation"],answer:"Time for disk head movement"},
{question:"FIFO disk scheduling serves requests",options:["In arrival order","Closest request first","Random order","Reverse order"],answer:"In arrival order"},
{question:"SSTF stands for",options:["Shortest Seek Time First","Shortest Service Time First","System Seek Transfer First","Small Seek Time Function"],answer:"Shortest Seek Time First"},
{question:"SSTF selects",options:["Closest disk request","First request","Last request","Random request"],answer:"Closest disk request"},
{question:"SCAN algorithm is also called",options:["Elevator algorithm","Circular algorithm","Random algorithm","Queue algorithm"],answer:"Elevator algorithm"},
{question:"File management means",options:["Managing files on storage","CPU scheduling","Memory allocation","Disk repair"],answer:"Managing files on storage"},
{question:"Which is a file operation?",options:["Create","Read","Write","All of these"],answer:"All of these"},
{question:"Sequential access means",options:["Access data one by one","Random access","Direct access","Block access"],answer:"Access data one by one"},
{question:"Direct access means",options:["Access any location directly","Sequential reading","Disk scanning","Random scheduling"],answer:"Access any location directly"},
{question:"Contiguous allocation stores files",options:["Continuously","Randomly","Linked blocks","Indexed blocks"],answer:"Continuously"},
{question:"Linked allocation uses",options:["Pointers","Index blocks","Frames","Pages"],answer:"Pointers"},
{question:"Indexed allocation uses",options:["Index block","Pointers","Continuous blocks","Random blocks"],answer:"Index block"},
{question:"Directory is used to",options:["Organize files","Schedule CPU","Allocate memory","Manage network"],answer:"Organize files"},
{question:"Single-level directory stores",options:["All files in one directory","Files in many directories","Files in memory","Files in disk blocks"],answer:"All files in one directory"},
{question:"Two-level directory means",options:["Separate directory for each user","Two files only","Two processes","Two disks"],answer:"Separate directory for each user"},
{question:"Tree directory structure is",options:["Hierarchical","Linear","Circular","Random"],answer:"Hierarchical"},
{question:"Disk platter is",options:["Circular disk surface","CPU chip","RAM block","Disk head"],answer:"Circular disk surface"},
{question:"Track is",options:["Circular path on disk","Disk surface","Disk head","Memory block"],answer:"Circular path on disk"},
{question:"Sector is",options:["Smallest disk storage unit","Disk head","Disk track","File"],answer:"Smallest disk storage unit"},
{question:"Cylinder is",options:["Collection of tracks","Disk head","RAM block","File block"],answer:"Collection of tracks"},
{question:"Disk head reads data from",options:["Disk surface","CPU","RAM","Network"],answer:"Disk surface"},
{question:"Belady's anomaly occurs in",options:["FIFO","LRU","Optimal","SSTF"],answer:"FIFO"},
{question:"Best page replacement algorithm theoretically",options:["Optimal","FIFO","LRU","Random"],answer:"Optimal"}
];

const QUESTIONS_SE = [
  {question:"What is the systematic application of engineering approaches to software development called?",options:["Computer science","Software engineering","Systems programming","Data engineering"],answer:"Software engineering"},
  {question:"Which SDLC phase involves understanding and documenting what the software must do?",options:["Design","Implementation","Requirements analysis","Deployment"],answer:"Requirements analysis"},
  {question:"Which type of requirement describes how a system performs rather than what it does?",options:["Functional requirement","Non-functional requirement","Design requirement","Business requirement"],answer:"Non-functional requirement"},
  {question:"What does SRS stand for in software engineering?",options:["Software Reliability Standard","Software Requirement Specification","System Resource Summary","Software Release Schedule"],answer:"Software Requirement Specification"},
  {question:"Which SDLC phase converts design blueprints into actual executable code?",options:["Testing","Design","Deployment","Implementation"],answer:"Implementation"},
  {question:"Which software life cycle model follows a strictly sequential phase-by-phase approach?",options:["Agile","Spiral","Waterfall","Incremental"],answer:"Waterfall"},
  {question:"What is the biggest disadvantage of the Waterfall model?",options:["Too many iterations","Inflexible to changes","Requires too much testing","No design phase"],answer:"Inflexible to changes"},
  {question:"The V-Model is an extension of which model?",options:["Agile model","Spiral model","Waterfall model","Incremental model"],answer:"Waterfall model"},
  {question:"In the V-Model, each development stage corresponds to a matching stage of:",options:["Coding","Deployment","Testing","Design"],answer:"Testing"},
  {question:"Which model develops software through repeated cycles in smaller portions at a time?",options:["Waterfall","V-Model","Iterative and Incremental","DevOps"],answer:"Iterative and Incremental"},
  {question:"The Agile model places most emphasis on:",options:["Sequential execution","Customer collaboration and flexibility","Complete documentation before coding","Strict phase deadlines"],answer:"Customer collaboration and flexibility"},
  {question:"Which Agile framework uses fixed-length iterations called sprints?",options:["Kanban","XP","Scrum","DevOps"],answer:"Scrum"},
  {question:"Kanban is best described as:",options:["A visual approach to managing work in progress","A fixed-iteration framework","A risk-driven model","A linear development model"],answer:"A visual approach to managing work in progress"},
  {question:"Which model combines iterative prototyping with a strong focus on risk analysis?",options:["Waterfall","Agile","Spiral","V-Model"],answer:"Spiral"},
  {question:"What is a key disadvantage of the Spiral model?",options:["No testing phase","Inflexible to change","Can be costly and complex","No risk management"],answer:"Can be costly and complex"},
  {question:"DevOps integrates which two disciplines?",options:["Design and testing","Development and operations","Coding and deployment","Analysis and coding"],answer:"Development and operations"},
  {question:"CI in DevOps stands for:",options:["Continuous Improvement","Code Inspection","Continuous Integration","Component Initialization"],answer:"Continuous Integration"},
  {question:"CD in a DevOps pipeline stands for:",options:["Continuous Design","Code Delivery","Continuous Deployment","Component Development"],answer:"Continuous Deployment"},
  {question:"Which software project management document outlines timelines, resources, and milestones?",options:["Test plan","Project plan","SRS","Design document"],answer:"Project plan"},
  {question:"A Gantt chart is primarily used for:",options:["Risk analysis","Scheduling tasks and showing dependencies","Requirement elicitation","Code documentation"],answer:"Scheduling tasks and showing dependencies"},
  {question:"Which project management activity assesses the likelihood and impact of potential problems?",options:["Stakeholder analysis","Risk analysis","Capacity planning","Quality control"],answer:"Risk analysis"},
  {question:"Stakeholder management in a project involves:",options:["Writing test cases","Identifying and engaging all people affected by the project","Designing database schemas","Writing source code"],answer:"Identifying and engaging all people affected by the project"},
  {question:"Which requirement elicitation technique involves watching users in their actual work environment?",options:["Prototyping","Surveys","Interviews","Observation"],answer:"Observation"},
  {question:"User stories are written from the perspective of:",options:["The developer","The tester","The end user","The project manager"],answer:"The end user"},
  {question:"Entity-Relationship Diagrams (ERDs) are used to model:",options:["System processes","Data entities and their relationships","User interfaces","Network architecture"],answer:"Data entities and their relationships"},
  {question:"Requirement traceability ensures that each requirement can be traced back to:",options:["Its cost estimate","Its origin and linked artifacts","The deployment plan","The test engineer"],answer:"Its origin and linked artifacts"},
  {question:"Which tool is commonly used for requirement management in large-scale projects?",options:["Eclipse","IBM Rational DOORS","PyCharm","GitHub"],answer:"IBM Rational DOORS"},
  {question:"High-level design in software engineering is also called:",options:["Detailed design","Architectural design","Interface design","Database design"],answer:"Architectural design"},
  {question:"Low-level design focuses on:",options:["Overall system structure","Internal structure of each component","Stakeholder communication","Test strategy"],answer:"Internal structure of each component"},
  {question:"Which SOLID principle states that a class should have only one reason to change?",options:["Open/Closed Principle","Dependency Inversion","Single Responsibility Principle","Interface Segregation"],answer:"Single Responsibility Principle"},
  {question:"The Open/Closed Principle states that software entities should be:",options:["Open for modification, closed for extension","Open for extension, closed for modification","Open for both extension and modification","Closed for both"],answer:"Open for extension, closed for modification"},
  {question:"The Liskov Substitution Principle states that:",options:["Interfaces must be small","Subtypes must be substitutable for their base types","Modules must be independent","Classes must have one responsibility"],answer:"Subtypes must be substitutable for their base types"},
  {question:"Which SOLID principle states that clients should not depend on interfaces they do not use?",options:["SRP","OCP","ISP","DIP"],answer:"ISP"},
  {question:"DIP in SOLID stands for:",options:["Data Inversion Principle","Dependency Inversion Principle","Design Interface Protocol","Dynamic Integration Pattern"],answer:"Dependency Inversion Principle"},
  {question:"Which UML diagram shows classes, attributes, methods, and relationships?",options:["Sequence diagram","Use case diagram","Class diagram","Activity diagram"],answer:"Class diagram"},
  {question:"A use case diagram illustrates:",options:["Internal algorithms","Interactions between users and the system","Database tables","Network topology"],answer:"Interactions between users and the system"},
  {question:"Which architectural style divides a system into distinct layers each with specific responsibilities?",options:["Microservices","Event-driven","Client-server","Layered architecture"],answer:"Layered architecture"},
  {question:"Microservices architecture is characterized by:",options:["One large deployable unit","Small independent services communicating via APIs","A single shared database","Fixed sequential phases"],answer:"Small independent services communicating via APIs"},
  {question:"Which type of code documentation is written at the start of a function to describe its purpose?",options:["Inline comment","Changelog","Docstring","README"],answer:"Docstring"},
  {question:"Version control commit messages should be:",options:["As short as possible","Randomly numbered","Clear and descriptive about the changes made","Written only at project end"],answer:"Clear and descriptive about the changes made"},
  {question:"Git Flow is a:",options:["Testing framework","Branching strategy for version control","Deployment automation tool","Debugging technique"],answer:"Branching strategy for version control"},
  {question:"Which programming paradigm avoids changing state and mutable data?",options:["Procedural","Object-oriented","Functional","Scripting"],answer:"Functional"},
  {question:"Which IDE is specifically designed for Python development?",options:["IntelliJ IDEA","Eclipse","Visual Studio Code","PyCharm"],answer:"PyCharm"},
  {question:"JUnit is a testing framework for which programming language?",options:["Python","JavaScript","Java","Ruby"],answer:"Java"},
  {question:"pytest is a testing framework for:",options:["Java","Ruby","JavaScript","Python"],answer:"Python"},
  {question:"Which testing type checks that individual units of code work correctly in isolation?",options:["System testing","Integration testing","Unit testing","Acceptance testing"],answer:"Unit testing"},
  {question:"Integration testing verifies:",options:["Individual components in isolation","The interactions between integrated components","Software usability","End-user acceptance"],answer:"The interactions between integrated components"},
  {question:"User Acceptance Testing (UAT) is conducted by:",options:["Developers","Automated tools","End-users","Project managers"],answer:"End-users"},
  {question:"Regression testing ensures that:",options:["New features work correctly","Recent changes have not broken existing functionality","Performance meets benchmarks","The UI is intuitive"],answer:"Recent changes have not broken existing functionality"},
  {question:"Which testing type assesses software behavior under heavy load conditions?",options:["Unit testing","Usability testing","Stress testing","Regression testing"],answer:"Stress testing"},
  {question:"Security testing is used to identify:",options:["UI bugs","Logic errors","Vulnerabilities and weaknesses against attacks","Memory leaks"],answer:"Vulnerabilities and weaknesses against attacks"},
  {question:"Exploratory testing is characterized by:",options:["Strictly scripted test cases","Testers exploring without predefined test cases","Automated script execution","Full regression coverage"],answer:"Testers exploring without predefined test cases"},
  {question:"Which debugging technique inserts output statements to trace the execution flow?",options:["Static analysis","Breakpoint debugging","Print debugging","Profiling"],answer:"Print debugging"},
  {question:"A breakpoint in debugging is used to:",options:["Delete buggy code","Pause program execution at a specific line","Speed up the program","Compile code faster"],answer:"Pause program execution at a specific line"},
  {question:"Static analysis examines code:",options:["During runtime","After deployment","Without executing it","During integration testing"],answer:"Without executing it"},
  {question:"Which tool is used to detect memory leaks in C/C++ programs?",options:["GDB","Valgrind","Chrome DevTools","PDB"],answer:"Valgrind"},
  {question:"GDB is the GNU debugger primarily used for debugging:",options:["Python programs","Java programs","C and C++ programs","JavaScript applications"],answer:"C and C++ programs"},
  {question:"MTBF stands for:",options:["Mean Time Between Failures","Maximum Test Batch Frequency","Minimum Time Before Fix","Module Test Baseline Framework"],answer:"Mean Time Between Failures"},
  {question:"Software reliability is defined as:",options:["The speed of software execution","The probability that software will work without failure for a specified time","The number of features in the software","The cost of software development"],answer:"The probability that software will work without failure for a specified time"},
  {question:"Quality Assurance (QA) focuses on:",options:["Finding defects in the final product only","Ensuring quality standards throughout the entire development process","Writing test scripts","Debugging code after release"],answer:"Ensuring quality standards throughout the entire development process"},
  {question:"Quality Control (QC) activities include:",options:["Process audits and methodology development","Inspection, peer reviews, and testing","Project planning and scheduling","Requirement elicitation"],answer:"Inspection, peer reviews, and testing"},
  {question:"Corrective maintenance involves:",options:["Adapting software to new platforms","Enhancing software performance","Fixing discovered defects","Preventing future problems"],answer:"Fixing discovered defects"},
  {question:"Adaptive maintenance means modifying software to:",options:["Fix bugs","Improve performance","Adapt to new environments","Prevent future failures"],answer:"Adapt to new environments"},
  {question:"Perfective maintenance is performed to:",options:["Fix critical bugs","Adapt to OS changes","Enhance performance or maintainability","Document the codebase"],answer:"Enhance performance or maintainability"},
  {question:"Preventive maintenance aims to:",options:["Fix current defects","Add new features","Modify software to prevent future problems","Deploy software to users"],answer:"Modify software to prevent future problems"},
  {question:"Which metric measures how well software conforms to its stated requirements?",options:["Defect density","Test coverage","Requirement traceability","Customer satisfaction index"],answer:"Requirement traceability"},
  {question:"Defect density is measured as:",options:["Number of defects per lines of code","Time taken to fix a defect","Number of test cases executed","Cost of fixing all defects"],answer:"Number of defects per lines of code"},
  {question:"Which software design concept bundles data and the methods that operate on it within one unit?",options:["Abstraction","Modularity","Encapsulation","Inheritance"],answer:"Encapsulation"},
  {question:"Abstraction in software design means:",options:["Hiding implementation details and showing only essential features","Dividing software into modules","Reusing code across classes","Linking components via APIs"],answer:"Hiding implementation details and showing only essential features"},
  {question:"Which Agile practice focuses on technical excellence and frequent software releases?",options:["Scrum","Kanban","Extreme Programming (XP)","DevOps"],answer:"Extreme Programming (XP)"},
  {question:"The primary purpose of code refactoring is to:",options:["Add new features","Fix bugs","Improve code structure without changing its behavior","Increase code complexity"],answer:"Improve code structure without changing its behavior"}
];

// ── Subject metadata ─────────────────────────────────────────
const SUBJECTS = {
    ds: { name: 'Data Structures',       subtitle: 'Stacks, Queues, Trees, Graphs, Sorting & Searching', questions: QUESTIONS_DS },
    cn: { name: 'Computer Networks',     subtitle: 'OSI Model, TCP/IP, Protocols, Routing & Security',   questions: QUESTIONS_CN },
    os: { name: 'Operating Systems',     subtitle: 'Scheduling, Memory Management, Deadlock & File I/O', questions: QUESTIONS_OS },
    se: { name: 'Software Engineering',  subtitle: 'SDLC Models, Agile, Design Principles, Testing & Maintenance', questions: QUESTIONS_SE }
};

// ── Detect subject from URL ───────────────────────────────────
const params  = new URLSearchParams(window.location.search);
const subjectKey = (params.get('subject') || 'ds').toLowerCase();
const subject = SUBJECTS[subjectKey] || SUBJECTS['ds'];

// ── Shuffle helper ────────────────────────────────────────────
function shuffle(arr) {
    let ci = arr.length, ri;
    while (ci !== 0) {
        ri = Math.floor(Math.random() * ci--);
        [arr[ci], arr[ri]] = [arr[ri], arr[ci]];
    }
    return arr;
}

// ── State ─────────────────────────────────────────────────────
let quizQuestions = [];

// ── Progress bar ──────────────────────────────────────────────
function updateProgress() {
    const answered = quizQuestions.filter(q => {
        return document.querySelector(`input[name="question-${q.id}"]:checked`);
    }).length;
    const total = quizQuestions.length;
    const pct = total ? (answered / total) * 100 : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = `${answered} / ${total} answered`;
}

// ── Build quiz ────────────────────────────────────────────────
function initQuiz() {
    document.getElementById('quiz-title').textContent   = `ECET 2026 — ${subject.name}`;
    document.getElementById('quiz-subtitle').textContent = subject.subtitle;
    document.title = `ECET Mock Test — ${subject.name}`;

    quizQuestions = JSON.parse(JSON.stringify(subject.questions));
    shuffle(quizQuestions);

    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        q.id = index + 1;
        shuffle(q.options);

        const card = document.createElement('div');
        card.className = 'question-card';
        card.style.animationDelay = `${Math.min(index * 0.04, 0.8)}s`;

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${q.question}`;
        card.appendChild(title);

        q.options.forEach(opt => {
            const label = document.createElement('label');
            label.className = 'option-label';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${q.id}`;
            radio.value = opt;
            radio.addEventListener('change', updateProgress);

            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));
            card.appendChild(label);
        });

        container.appendChild(card);
    });

    updateProgress();
}

// ── Submit ────────────────────────────────────────────────────
document.getElementById('submit-btn').addEventListener('click', () => {
    const unanswered = quizQuestions.filter(q =>
        !document.querySelector(`input[name="question-${q.id}"]:checked`)
    ).length;

    if (unanswered > 0) {
        const go = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
        if (!go) return;
    }

    let score = 0;
    let userAnswers = {};

    quizQuestions.forEach(q => {
        const sel = document.querySelector(`input[name="question-${q.id}"]:checked`);
        if (sel) {
            userAnswers[q.id] = sel.value;
            if (sel.value === q.answer) score++;
        } else {
            userAnswers[q.id] = null;
        }
    });

    localStorage.setItem('ecet_current_session', JSON.stringify({
        score,
        total: quizQuestions.length,
        subject: subject.name,
        subjectKey,
        userAnswers,
        shuffledQuestions: quizQuestions
    }));

    window.location.href = 'result.html';
});

window.onload = initQuiz;
