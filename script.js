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

const QUESTIONS_JAVA = [
  { question: "What does WORA stand for in Java?", options: ["Write Once Run Anywhere", "Write Once Read Anywhere", "Write Only Run Anywhere", "Write Once Reuse Anywhere"], answer: "Write Once Run Anywhere" },
  { question: "What is the primary purpose of the Java Virtual Machine (JVM)?", options: ["To compile Java code", "To interpret bytecode", "To manage memory", "To provide OS interface services"], answer: "To interpret bytecode" },
  { question: "Which method is the entry point for any Java program?", options: ["start()", "init()", "run()", "main()"], answer: "main()" },
  { question: "Java code is compiled into which format before execution?", options: ["Machine code", "Assembly code", "Bytecode", "Source code"], answer: "Bytecode" },
  { question: "Which of the following is NOT a Java primitive data type?", options: ["int", "float", "double", "String"], answer: "String" },
  { question: "What is the default value of a boolean variable in Java?", options: ["true", "null", "0", "false"], answer: "false" },
  { question: "Which keyword is used to print output to the console in Java?", options: ["System.out.println()", "Console.print()", "print()", "output()"], answer: "System.out.println()" },
  { question: "What does the 'static' keyword mean when applied to a method?", options: ["The method belongs to an instance", "The method cannot be overridden", "The method belongs to the class, not any object", "The method is abstract"], answer: "The method belongs to the class, not any object" },
  { question: "What is the use of the 'this' keyword in Java?", options: ["To refer to the current class", "To refer to the superclass", "To refer to the current object", "To refer to a local variable"], answer: "To refer to the current object" },
  { question: "Which of the following is not a valid Java keyword?", options: ["transient", "volatile", "static", "unsigned"], answer: "unsigned" },
  { question: "What is method overloading in Java?", options: ["Defining methods with same name but different parameters", "Defining a method in subclass with same signature as superclass", "Changing the return type of a method", "Using the same method name in different packages"], answer: "Defining methods with same name but different parameters" },
  { question: "Which of the following can distinguish overloaded methods?", options: ["Return type only", "Access specifier only", "Number or type of parameters", "The 'static' keyword"], answer: "Number or type of parameters" },
  { question: "Can constructors be overloaded in Java?", options: ["No, constructors cannot be overloaded", "Yes, constructors can be overloaded", "Only if the class is abstract", "Only with the @Override annotation"], answer: "Yes, constructors can be overloaded" },
  { question: "Which rule applies to method overloading in Java?", options: ["Return type alone can distinguish overloaded methods", "Methods must differ in type or number of parameters", "Methods must have different names", "Methods cannot have the same access modifier"], answer: "Methods must differ in type or number of parameters" },
  { question: "What improves code readability by using method overloading?", options: ["Using different class names", "Having methods with the same name but different parameters", "Having different return types", "Using abstract classes"], answer: "Having methods with the same name but different parameters" },
  { question: "Which keyword is used to inherit a class in Java?", options: ["implements", "inherits", "super", "extends"], answer: "extends" },
  { question: "In single inheritance, a class can inherit from how many superclasses?", options: ["Two", "Three", "One", "Unlimited"], answer: "One" },
  { question: "Which type of inheritance creates a chain where each class derives from the previous one?", options: ["Single Inheritance", "Hierarchical Inheritance", "Multiple Inheritance", "Multilevel Inheritance"], answer: "Multilevel Inheritance" },
  { question: "In hierarchical inheritance, how many classes inherit from a single superclass?", options: ["One", "Two", "Three", "Multiple"], answer: "Multiple" },
  { question: "Why does Java not support multiple inheritance through classes?", options: ["To improve performance", "To avoid complexity and simplify design", "To support interfaces better", "Because it is not object-oriented"], answer: "To avoid complexity and simplify design" },
  { question: "Which class is known as the parent class or superclass in inheritance?", options: ["Child class", "Derived class", "Superclass", "Abstract class"], answer: "Superclass" },
  { question: "In multilevel inheritance with classes Animal, Dog, and Puppy, which method can a Puppy object call?", options: ["Only Puppy methods", "Only Dog methods", "Only Animal methods", "Methods from Animal, Dog, and Puppy"], answer: "Methods from Animal, Dog, and Puppy" },
  { question: "Which keyword is used to declare a class that cannot be inherited?", options: ["static", "abstract", "sealed", "final"], answer: "final" },
  { question: "What is method overriding in Java?", options: ["Defining multiple methods with same name", "Providing specific implementation of a method defined in superclass", "Changing the parameter list of a method", "Declaring a method as abstract"], answer: "Providing specific implementation of a method defined in superclass" },
  { question: "Which annotation indicates that a method is intended to override a superclass method?", options: ["@Overload", "@Inherited", "@Override", "@SuperMethod"], answer: "@Override" },
  { question: "What type of polymorphism is achieved through method overriding?", options: ["Compile-time polymorphism", "Static polymorphism", "Runtime polymorphism", "Interface polymorphism"], answer: "Runtime polymorphism" },
  { question: "Can the access level of an overriding method be more restrictive than the overridden method?", options: ["Yes, always", "No, it cannot", "Only for private methods", "Only when using interfaces"], answer: "No, it cannot" },
  { question: "What is a covariant return type in method overriding?", options: ["The return type must be identical", "The return type can be a subtype of the overridden method's return type", "The return type must be a primitive", "The return type must be void"], answer: "The return type can be a subtype of the overridden method's return type" },
  { question: "In runtime polymorphism, which determines the method that gets called?", options: ["The reference type at compile time", "The actual object type at runtime", "The method's return type", "The access modifier of the method"], answer: "The actual object type at runtime" },
  { question: "Which keyword is used to define an interface in Java?", options: ["abstract", "class", "interface", "implements"], answer: "interface" },
  { question: "Which keyword is used by a class to implement an interface?", options: ["extends", "inherits", "interface", "implements"], answer: "implements" },
  { question: "Which Java version introduced default methods in interfaces?", options: ["Java 6", "Java 7", "Java 8", "Java 9"], answer: "Java 8" },
  { question: "What are fields in an interface implicitly declared as?", options: ["private, static, final", "protected, static, final", "public, static, final", "public, abstract, final"], answer: "public, static, final" },
  { question: "Which concept allows a class to implement multiple interfaces?", options: ["Single Inheritance", "Method Overloading", "Multiple Inheritance through Interfaces", "Polymorphism"], answer: "Multiple Inheritance through Interfaces" },
  { question: "Which interface must be implemented by a class to enable it to run as a thread?", options: ["Threadable", "Executable", "ActionListener", "Runnable"], answer: "Runnable" },
  { question: "Which of the following can interfaces contain in Java 8 and later?", options: ["Only abstract methods", "Only constants and abstract methods", "Abstract methods, default methods, and static methods", "Only static methods"], answer: "Abstract methods, default methods, and static methods" },
  { question: "What is the purpose of default methods in interfaces?", options: ["To replace abstract methods", "To maintain backward compatibility when interfaces are updated", "To make interfaces behave like classes", "To prevent overriding"], answer: "To maintain backward compatibility when interfaces are updated" },
  { question: "What is the purpose of packages in Java?", options: ["To increase execution speed", "To organize classes and interfaces in a logical namespace", "To replace inheritance", "To declare abstract classes"], answer: "To organize classes and interfaces in a logical namespace" },
  { question: "Which keyword is used to define a package in Java?", options: ["import", "namespace", "package", "module"], answer: "package" },
  { question: "Which keyword is used to use a class from another package?", options: ["include", "using", "import", "require"], answer: "import" },
  { question: "Which wildcard character imports all classes from a package?", options: ["?", "#", "%", "*"], answer: "*" },
  { question: "Which access modifier makes a member accessible only within the same package?", options: ["public", "private", "protected", "Default (no modifier)"], answer: "Default (no modifier)" },
  { question: "Which access modifier makes a member accessible from any class?", options: ["private", "protected", "Default", "public"], answer: "public" },
  { question: "Which access modifier allows access within the same package and by subclasses?", options: ["public", "private", "protected", "Default"], answer: "protected" },
  { question: "Which of the following is a built-in Java package?", options: ["com.example", "java.util", "org.java", "javax.example"], answer: "java.util" },
  { question: "Which package provides classes for I/O streams in Java?", options: ["java.lang", "java.util", "java.net", "java.io"], answer: "java.io" },
  { question: "Which stream type handles raw binary data in Java?", options: ["Character Streams", "Buffered Streams", "Byte Streams", "Object Streams"], answer: "Byte Streams" },
  { question: "Which stream type handles character (text) data in Java?", options: ["Byte Streams", "Character Streams", "Data Streams", "Print Streams"], answer: "Character Streams" },
  { question: "What is the main advantage of using Buffered Streams?", options: ["They support writing binary data", "They reduce the number of I/O operations, improving performance", "They automatically close files", "They support reading from network"], answer: "They reduce the number of I/O operations, improving performance" },
  { question: "Which class is used to read characters from a file?", options: ["FileInputStream", "BufferedReader", "FileReader", "FileWriter"], answer: "FileReader" },
  { question: "Which class is used to write characters to a file?", options: ["FileOutputStream", "FileReader", "PrintStream", "FileWriter"], answer: "FileWriter" },
  { question: "Which interface is the root of the Java Collections Framework?", options: ["List", "Set", "Map", "Collection"], answer: "Collection" },
  { question: "Which collection allows duplicate elements and maintains insertion order?", options: ["HashSet", "TreeSet", "ArrayList", "HashMap"], answer: "ArrayList" },
  { question: "Which collection does NOT allow duplicate elements?", options: ["ArrayList", "LinkedList", "HashSet", "Vector"], answer: "HashSet" },
  { question: "Which collection maps keys to values and does not allow duplicate keys?", options: ["List", "Set", "Queue", "Map"], answer: "Map" },
  { question: "Which collection class allows accessing elements in the order they were inserted by key?", options: ["HashSet", "TreeSet", "TreeMap", "LinkedHashMap"], answer: "LinkedHashMap" },
  { question: "Which of the following is true about the ArrayList class?", options: ["It is synchronized", "It is part of java.lang package", "It is an abstract class", "It can grow dynamically"], answer: "It can grow dynamically" },
  { question: "Which of these statements about the Vector class is true?", options: ["Vector cannot grow dynamically", "Vector is part of java.lang package", "Vector is synchronized", "Vector does not allow duplicate elements"], answer: "Vector is synchronized" },
  { question: "Which exception is thrown when a program attempts to divide by zero?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "NumberFormatException", "ArithmeticException"], answer: "ArithmeticException" },
  { question: "Which block in exception handling is always executed regardless of whether an exception occurs?", options: ["try", "catch", "finally", "throw"], answer: "finally" },
  { question: "Which keyword is used to explicitly throw an exception in Java?", options: ["throws", "catch", "throw", "try"], answer: "throw" },
  { question: "Which keyword is used in a method signature to declare it might throw exceptions?", options: ["throw", "catch", "finally", "throws"], answer: "throws" },
  { question: "Which class must a custom exception extend to be a checked exception?", options: ["RuntimeException", "Throwable", "Exception", "Error"], answer: "Exception" },
  { question: "Which type of exception must be caught or declared in the method signature?", options: ["Unchecked Exception", "Error", "RuntimeException", "Checked Exception"], answer: "Checked Exception" },
  { question: "Which of the following is an unchecked exception?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], answer: "NullPointerException" },
  { question: "What is the parent class of all exceptions and errors in Java?", options: ["Exception", "Error", "Object", "Throwable"], answer: "Throwable" },
  { question: "Which method is used to start a thread's execution in Java?", options: ["run()", "init()", "execute()", "start()"], answer: "start()" },
  { question: "Which of the following methods is used to wait for a thread to die in Java?", options: ["sleep()", "wait()", "yield()", "join()"], answer: "join()" },
  { question: "What stage is a thread in after it has been created but not yet started?", options: ["Runnable", "Running", "New", "Blocked"], answer: "New" },
  { question: "Which method causes the currently executing thread to pause and allow others to execute?", options: ["sleep()", "join()", "interrupt()", "yield()"], answer: "yield()" },
  { question: "What is the purpose of synchronization in multithreading?", options: ["To speed up thread execution", "To control access to shared resources by multiple threads", "To create new threads", "To terminate threads safely"], answer: "To control access to shared resources by multiple threads" },
  { question: "Which of the following is NOT a method of the Thread class?", options: ["sleep()", "run()", "yield()", "wait()"], answer: "wait()" },
  { question: "Which method is used for inter-thread communication to make a thread wait?", options: ["sleep()", "join()", "wait()", "yield()"], answer: "wait()" },
  { question: "What is the return type of the hashCode() method in Java?", options: ["Object", "long", "boolean", "int"], answer: "int" },
  { question: "Which of these data types can be used in a switch statement expression in Java?", options: ["float", "boolean", "long", "int"], answer: "int" },
  { question: "What is the output of: int a=10; int b=20; int c=30; a=b=c; System.out.println(a);?", options: ["10", "20", "Compilation Error", "30"], answer: "30" },
];

const QUESTIONS_WT = [
  {question:"Which of the following is a key component of web design?",options:["SQL","API","Usability","Server"],answer:"Usability"},
  {question:"What does CSS stand for?",options:["Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets","Cascading Style Sheets"],answer:"Cascading Style Sheets"},
  {question:"Which HTML tag is used for creating a hyperlink?",options:["<link>","<href>","<url>","<a>"],answer:"<a>"},
  {question:"What is the purpose of the alt attribute in an img tag?",options:["To display an image","To link an image","To style the image","To provide alternative text if image cannot be displayed"],answer:"To provide alternative text if image cannot be displayed"},
  {question:"Which HTML tag is used to define an internal style sheet?",options:["<script>","<css>","<link>","<style>"],answer:"<style>"},
  {question:"What does HTML stand for?",options:["HyperText Markup Language","HighText Machine Language","HyperText Machine Language","HyperTransfer Markup Language"],answer:"HyperText Markup Language"},
  {question:"Which declaration defines the document type in HTML?",options:["<html>","<!DOCTYPE html>","<head>","<meta>"],answer:"<!DOCTYPE html>"},
  {question:"Which HTML tag contains meta-information about the document?",options:["<body>","<meta>","<head>","<title>"],answer:"<head>"},
  {question:"Which HTML element contains the visible page content?",options:["<head>","<html>","<meta>","<body>"],answer:"<body>"},
  {question:"Which tag sets the title shown in the browser tab?",options:["<head>","<meta>","<header>","<title>"],answer:"<title>"},
  {question:"Which HTML tag embeds an image on a page?",options:["<picture>","<media>","<src>","<img>"],answer:"<img>"},
  {question:"Which HTML tag creates an unordered list?",options:["<ol>","<li>","<dl>","<ul>"],answer:"<ul>"},
  {question:"Which HTML tag creates an ordered list?",options:["<ul>","<li>","<list>","<ol>"],answer:"<ol>"},
  {question:"Which tag defines a table row in HTML?",options:["<td>","<th>","<table>","<tr>"],answer:"<tr>"},
  {question:"Which tag defines a table header cell in HTML?",options:["<tr>","<td>","<thead>","<th>"],answer:"<th>"},
  {question:"Which HTML5 element defines a navigation section?",options:["<menu>","<section>","<header>","<nav>"],answer:"<nav>"},
  {question:"Which HTML5 element defines a footer for a document?",options:["<bottom>","<section>","<aside>","<footer>"],answer:"<footer>"},
  {question:"Which HTML5 element defines independent self-contained content?",options:["<section>","<aside>","<div>","<article>"],answer:"<article>"},
  {question:"Which HTML5 element defines content aside from the main content?",options:["<article>","<section>","<nav>","<aside>"],answer:"<aside>"},
  {question:"Which HTML tag makes text bold?",options:["<strong>","<em>","<i>","<b>"],answer:"<b>"},
  {question:"Which HTML tag defines important text, usually displayed bold?",options:["<b>","<em>","<i>","<strong>"],answer:"<strong>"},
  {question:"Which HTML tag inserts a horizontal rule?",options:["<br>","<line>","<rule>","<hr>"],answer:"<hr>"},
  {question:"Which HTML5 element is used for drawing graphics via JavaScript?",options:["<draw>","<graphic>","<svg>","<canvas>"],answer:"<canvas>"},
  {question:"Which HTML tag is used for a multi-line text input in a form?",options:["<input>","<textbox>","<field>","<textarea>"],answer:"<textarea>"},
  {question:"Which input type is used for email fields in HTML5?",options:["<input type='text'>","<input type='mail'>","<input type='email'>","<input type='address'>"],answer:"<input type='email'>"},
  {question:"In CSS, what does the # symbol represent?",options:["Class selector","Tag selector","Universal selector","ID selector"],answer:"ID selector"},
  {question:"In CSS, what does the . (dot) symbol represent?",options:["ID selector","Tag selector","Universal selector","Class selector"],answer:"Class selector"},
  {question:"Which CSS property changes the text color?",options:["font-color","text-color","text-style","color"],answer:"color"},
  {question:"Which CSS property adds space inside an element's border?",options:["margin","spacing","border","padding"],answer:"padding"},
  {question:"Which CSS property adds space outside an element's border?",options:["padding","spacing","border","margin"],answer:"margin"},
  {question:"What does the CSS rule p {margin: 20px;} do?",options:["Adds padding of 20px to all sides","Adds margin to top only","Adds margin to left only","Adds margin of 20px to all sides of the paragraph"],answer:"Adds margin of 20px to all sides of the paragraph"},
  {question:"Which CSS method applies styles directly within an HTML tag?",options:["External CSS","Embedded CSS","Internal CSS","Inline CSS"],answer:"Inline CSS"},
  {question:"Which CSS method uses a <style> block inside the <head> section?",options:["Inline CSS","External CSS","Linked CSS","Internal CSS"],answer:"Internal CSS"},
  {question:"Which HTML element links an external CSS file to an HTML document?",options:["<style>","<script>","<css>","<link>"],answer:"<link>"},
  {question:"Which CSS property controls the layout using a flexible box model?",options:["float","position","grid","display: flex"],answer:"display: flex"},
  {question:"Which CSS layout system uses rows and columns defined by grid-template-columns?",options:["Flexbox","Float","Bootstrap","CSS Grid"],answer:"CSS Grid"},
  {question:"Which CSS at-rule is used for responsive design based on screen size?",options:["@keyframes","@import","@font-face","@media"],answer:"@media"},
  {question:"Which CSS property is used to create smooth transitions between states?",options:["animation","transform","keyframes","transition"],answer:"transition"},
  {question:"Which CSS rule defines an animation sequence?",options:["@media","@transition","@import","@keyframes"],answer:"@keyframes"},
  {question:"Which CSS selector targets an element when the user hovers over it?",options:[":focus",":active",":visited",":hover"],answer:":hover"},
  {question:"What does XML stand for?",options:["Extra Markup Language","Example Markup Language","Excellent Markup Language","Extensible Markup Language"],answer:"Extensible Markup Language"},
  {question:"What is the primary purpose of XML?",options:["To display data in browsers","To style web pages","To replace HTML","To store and transport data"],answer:"To store and transport data"},
  {question:"Which of the following is a rule for writing well-formed XML?",options:["Tags are case-insensitive","Multiple root elements are allowed","Attribute values need not be quoted","All elements must be properly nested and closed"],answer:"All elements must be properly nested and closed"},
  {question:"What is the difference between well-formed and valid XML?",options:["Well-formed uses DTD; valid does not","Valid XML has correct syntax; well-formed adheres to a schema","Well-formed has correct syntax; valid adheres to a defined schema","There is no difference"],answer:"Well-formed has correct syntax; valid adheres to a defined schema"},
  {question:"Which XML parsing model reads the entire document into memory as a tree?",options:["SAX","RSS","DTD","DOM"],answer:"DOM"},
  {question:"Which XML parsing model is event-driven?",options:["DOM","DTD","XSD","SAX"],answer:"SAX"},
  {question:"Which declaration appears at the top of an XML document?",options:["<!DOCTYPE>","<xml>","<?xml version='1.0'?>","<root>"],answer:"<?xml version='1.0'?>"},
  {question:"Which technology is used to define the structure and data types of an XML document?",options:["DTD only","CSS","JSON","XML Schema (XSD)"],answer:"XML Schema (XSD)"},
  {question:"What is JavaScript primarily used for?",options:["Server-side scripting","Database management","Styling web pages","Creating dynamic and interactive web content"],answer:"Creating dynamic and interactive web content"},
  {question:"Which HTML tag is used to embed JavaScript in a web page?",options:["<js>","<code>","<java>","<script>"],answer:"<script>"},
  {question:"Which JavaScript keyword declares a block-scoped variable?",options:["var","const","define","let"],answer:"let"},
  {question:"Which JavaScript keyword declares a constant that cannot be reassigned?",options:["let","var","fixed","const"],answer:"const"},
  {question:"What is the output of: console.log(typeof 'Hello World');",options:["number","boolean","object","string"],answer:"string"},
  {question:"Which method selects an HTML element by its ID in JavaScript?",options:["getElementsByClassName()","querySelectorAll()","getElementByName()","getElementById()"],answer:"getElementById()"},
  {question:"Which JavaScript method adds an event listener to an element?",options:["attachEvent()","onEvent()","listenEvent()","addEventListener()"],answer:"addEventListener()"},
  {question:"Which event fires when a user clicks on an HTML element?",options:["onchange","onmouseover","onmouseenter","onclick"],answer:"onclick"},
  {question:"Which JavaScript ES6 feature allows embedding expressions inside strings?",options:["String concatenation","Arrow functions","Destructuring","Template literals"],answer:"Template literals"},
  {question:"Which ES6 syntax defines a shorter way to write functions?",options:["function shorthand","lambda functions","async functions","Arrow functions"],answer:"Arrow functions"},
  {question:"Which JavaScript object is used to make AJAX requests?",options:["FetchRequest","HttpRequest","AjaxObject","XMLHttpRequest"],answer:"XMLHttpRequest"},
  {question:"What does AJAX stand for?",options:["Advanced JavaScript and XML","Asynchronous JavaScript and XHTML","Advanced JavaScript and XHTML","Asynchronous JavaScript and XML"],answer:"Asynchronous JavaScript and XML"},
  {question:"What is the main advantage of AJAX?",options:["It replaces HTML","It styles web pages","It compiles JavaScript","It fetches data without reloading the web page"],answer:"It fetches data without reloading the web page"},
  {question:"Which jQuery method hides an HTML element?",options:["$('el').hidden()","$('el').display('none')","$('el').visible(false)","$('el').hide()"],answer:"$('el').hide()"},
  {question:"Which jQuery method changes the inner HTML of an element?",options:["$('#id').text()","$('#id').value()","$('#id').src()","$('#id').html()"],answer:"$('#id').html()"},
  {question:"Which jQuery method is used to change the CSS of an element?",options:[".style()","$('#id').css()","$('#id').attr()","$('#id').class()"],answer:"$('#id').css()"},
  {question:"Which jQuery function ensures the DOM is fully loaded before executing code?",options:["$.ready()","$(window).load()","$.onload()","$(document).ready()"],answer:"$(document).ready()"},
  {question:"Which is a correct jQuery AJAX call?",options:["ajax({url:'data.txt'})","$.get({url:'data.txt'})","$.fetch('data.txt')","$.ajax({url:'data.txt', success: function(result){}})"],answer:"$.ajax({url:'data.txt', success: function(result){}})"},
  {question:"Which of the following is NOT a feature of jQuery?",options:["Simplifies JavaScript code","Supports AJAX","Provides easy DOM manipulation","Is a server-side scripting language"],answer:"Is a server-side scripting language"},
  {question:"Which of the following is a popular web server?",options:["MySQL","PHP","Python","Apache"],answer:"Apache"},
  {question:"Which web server is known for high performance and low resource consumption?",options:["Apache","IIS","LiteSpeed","Nginx"],answer:"Nginx"},
  {question:"What is PHP primarily used for?",options:["Creating desktop applications","Designing web pages","Managing databases","Writing server-side scripts"],answer:"Writing server-side scripts"},
  {question:"How do you start a PHP code block?",options:["<php>","<script php>","<?php code ?>","<?php"],answer:"<?php"},
  {question:"Which PHP superglobal retrieves form data sent via POST method?",options:["$_GET","$_REQUEST","$_SESSION","$_POST"],answer:"$_POST"},
  {question:"Which PHP function is used to connect to a MySQL database?",options:["mysql_connect()","database_connect()","db_connect()","mysqli_connect()"],answer:"mysqli_connect()"},
  {question:"Which PHP function prevents XSS by converting special characters to HTML entities?",options:["strip_tags()","addslashes()","sanitize()","htmlspecialchars()"],answer:"htmlspecialchars()"},
  {question:"Which PHP function starts a session?",options:["session_create()","start_session()","session_init()","session_start()"],answer:"session_start()"},
  {question:"Where is PHP session data stored?",options:["In cookies","In the database","In the browser","On the server"],answer:"On the server"},
  {question:"Which PHP function sets a cookie?",options:["cookie_set()","create_cookie()","set_cookie()","setcookie()"],answer:"setcookie()"},
  {question:"What is the typical size limit of a cookie?",options:["1KB","16KB","8KB","4KB"],answer:"4KB"},
  {question:"Which PHP stack runs on Windows with Apache, MySQL, and PHP?",options:["LAMP","MAMP","XAMPP","WAMP"],answer:"WAMP"},
  {question:"Which cross-platform stack includes Apache, MySQL, PHP, and Perl?",options:["LAMP","WAMP","MAMP","XAMPP"],answer:"XAMPP"},
];

const QUESTIONS_DE = [
  {question:"In the binary number system, the base (radix) is:",options:["8","10","2","16"],answer:"2"},
  {question:"What is the decimal equivalent of binary number 1010100 1?",options:["169","170","171","168"],answer:"169"},
  {question:"Convert decimal 1341 to octal.",options:["2475","2574","2745","2457"],answer:"2475"},
  {question:"What is the hexadecimal equivalent of decimal 3315?",options:["CF3","FC3","3CF","3FC"],answer:"CF3"},
  {question:"Convert hexadecimal 4B3 to decimal.",options:["1203","1230","1302","1032"],answer:"1203"},
  {question:"How many binary digits correspond to one octal digit?",options:["2","3","4","1"],answer:"3"},
  {question:"How many binary digits correspond to one hexadecimal digit?",options:["2","3","4","5"],answer:"4"},
  {question:"Convert binary 10110110 to hexadecimal.",options:["B6","6B","B7","7B"],answer:"B6"},
  {question:"The ten's complement of a decimal number is obtained by:",options:["Subtracting each digit from 9","Adding 1 to the nine's complement","Subtracting each digit from 10","Multiplying each digit by 10"],answer:"Adding 1 to the nine's complement"},
  {question:"In two's complement representation, what is the result of complementing 00000000?",options:["11111111","00000001","00000000","10000000"],answer:"00000000"},
  {question:"What is the two's complement of decimal +12 in 8-bit format?",options:["11110100","11110011","10001100","01110100"],answer:"11110100"},
  {question:"In signed magnitude representation, how many values can be represented using 8 bits?",options:["256","255","254","128"],answer:"255"},
  {question:"In two's complement, the most negative 8-bit number is:",options:["-127","-128","-255","-256"],answer:"-128"},
  {question:"In excess-128 representation, (+12) is stored as:",options:["10001100","01110100","00001100","11110100"],answer:"10001100"},
  {question:"What is the BCD encoding of decimal 127?",options:["0001 0010 0111","0001 0111 0010","0010 0001 0111","0111 0010 0001"],answer:"0001 0010 0111"},
  {question:"In BCD, how many bits are used to represent each decimal digit?",options:["2","3","4","8"],answer:"4"},
  {question:"The binary conversion of 13 is 1101. The BCD coding of 13 is:",options:["0001 0011","0001 1101","1101 0001","0011 0001"],answer:"0001 0011"},
  {question:"In the excess-3 code, the code for decimal 6 is:",options:["1001","0110","1010","0011"],answer:"1001"},
  {question:"A parity bit is used to:",options:["Increase data speed","Detect errors in transmitted data","Encrypt data","Compress data"],answer:"Detect errors in transmitted data"},
  {question:"An even parity bit makes the total number of 1s in the message:",options:["Odd","Even","Zero","One"],answer:"Even"},
  {question:"Which type of error CANNOT be detected by a single parity bit?",options:["Single-bit error","Two-bit error","Three-bit error","Burst error"],answer:"Two-bit error"},
  {question:"In Gray code, successive code words differ by:",options:["All bits","Two bits","One bit","No bits"],answer:"One bit"},
  {question:"The Gray code for decimal 3 is:",options:["0011","0010","0110","0100"],answer:"0010"},
  {question:"Which logic gate produces output 1 only when ALL inputs are 1?",options:["OR","AND","NAND","XOR"],answer:"AND"},
  {question:"Which logic gate produces output 1 when ANY input is 1?",options:["AND","NOR","OR","XNOR"],answer:"OR"},
  {question:"The output of a NOT gate when input is 0 is:",options:["0","1","Undefined","High impedance"],answer:"1"},
  {question:"The NAND gate is equivalent to which combination?",options:["AND followed by NOT","OR followed by NOT","NOT followed by AND","XOR followed by NOT"],answer:"AND followed by NOT"},
  {question:"The NOR gate truth table output for inputs (0,0) is:",options:["0","1","Undefined","X"],answer:"1"},
  {question:"The XOR gate output is 1 when:",options:["Both inputs are 1","Both inputs are 0","Inputs are different","Inputs are the same"],answer:"Inputs are different"},
  {question:"The XNOR gate output is 1 when:",options:["Inputs are different","Exactly one input is 1","Both inputs are same","Both inputs are 0 only"],answer:"Both inputs are same"},
  {question:"Which logic family uses enhancement-mode MOSFETs and consumes minimal power?",options:["TTL","RTL","ECL","CMOS"],answer:"CMOS"},
  {question:"Which logic family is designed for extremely high-speed operation by avoiding transistor saturation?",options:["DTL","TTL","ECL","CMOS"],answer:"ECL"},
  {question:"Fan-out defines the maximum number of:",options:["Inputs a gate can accept","Outputs a gate can produce","Digital inputs a gate output can feed","Clock cycles per second"],answer:"Digital inputs a gate output can feed"},
  {question:"A typical TTL gate has a fan-out of:",options:["1","5","10","25"],answer:"10"},
  {question:"Fan-in defines the maximum number of:",options:["Digital inputs a single gate can accept","Outputs a gate produces","Connections to power supply","Clock inputs"],answer:"Digital inputs a single gate can accept"},
  {question:"Which Boolean law states A + A = A?",options:["Complement law","Absorption law","Identity law","Involution law"],answer:"Identity law"},
  {question:"De Morgan's theorem states (A+B)' equals:",options:["A'+B'","A'B'","AB","A+B"],answer:"A'B'"},
  {question:"De Morgan's theorem states (AB)' equals:",options:["A'B'","A'+B'","A+B","A'B"],answer:"A'+B'"},
  {question:"The Boolean expression A + AB simplifies to:",options:["AB","A+B","A","B"],answer:"A"},
  {question:"The principle of duality states that AND is interchanged with:",options:["NOT","XOR","OR","NAND"],answer:"OR"},
  {question:"Which standard form has AND terms ORed together?",options:["Product of Sum","Sum of Product","Minterm expansion","Maxterm expansion"],answer:"Sum of Product"},
  {question:"A minterm is associated with which logic value?",options:["0","1","X","Both 0 and 1"],answer:"1"},
  {question:"A maxterm is an OR combination of variables that evaluates to:",options:["1 in the truth table","0 in the truth table","Always 1","Always 0"],answer:"0 in the truth table"},
  {question:"How many minterms exist for a 3-variable Boolean function?",options:["4","6","8","16"],answer:"8"},
  {question:"In a Karnaugh map, adjacent cells differ by:",options:["All variables","Two variables","One variable","No variables"],answer:"One variable"},
  {question:"In a 4-variable K-map, grouping 8 adjacent 1s yields a product term with how many variables?",options:["1","2","3","4"],answer:"1"},
  {question:"What does a 'don't care' condition in a K-map indicate?",options:["The output must be 0","The output must be 1","The input combination never occurs","The circuit has an error"],answer:"The input combination never occurs"},
  {question:"To implement a Boolean function using only NAND gates, the function must first be in:",options:["Product of Sum form","Sum of Product form","Canonical form","Minterm form"],answer:"Sum of Product form"},
  {question:"NAND and NOR gates are called universal gates because:",options:["They are the fastest","They can implement any Boolean function","They consume no power","They have only one input"],answer:"They can implement any Boolean function"},
  {question:"A combinational circuit's output depends on:",options:["Previous inputs only","Current inputs only","Both current and previous inputs","Clock signal only"],answer:"Current inputs only"},
  {question:"A half adder has how many inputs and outputs?",options:["2 inputs, 1 output","2 inputs, 2 outputs","3 inputs, 2 outputs","1 input, 2 outputs"],answer:"2 inputs, 2 outputs"},
  {question:"The Sum output of a half adder is implemented using which gate?",options:["AND","OR","XOR","NAND"],answer:"XOR"},
  {question:"A full adder differs from a half adder in that it:",options:["Has more outputs","Accepts a carry-in input","Uses only NAND gates","Operates at higher speed"],answer:"Accepts a carry-in input"},
  {question:"The half subtractor Borrow output equation is:",options:["B = X'Y","B = XY","B = X'Y'","B = X+Y"],answer:"B = X'Y"},
  {question:"A multiplexer selects one of its data inputs based on:",options:["The clock signal","Address inputs","Enable signal","Power supply"],answer:"Address inputs"},
  {question:"A demultiplexer routes a single input to one of how many outputs for n address lines?",options:["n","2n","n²","2^n"],answer:"2^n"},
  {question:"A decoder with 3 address inputs has how many outputs?",options:["3","6","8","16"],answer:"8"},
  {question:"An encoder with 4 inputs and 2 outputs is called a:",options:["2-to-4 encoder","4-to-2 encoder","4-to-2 decoder","2-to-4 decoder"],answer:"4-to-2 encoder"},
  {question:"A priority encoder resolves simultaneous active inputs by:",options:["Ignoring all inputs","Selecting the highest priority input","Selecting the lowest priority input","Generating an error"],answer:"Selecting the highest priority input"},
  {question:"Sequential circuits differ from combinational circuits in that they have:",options:["More inputs","Memory","Faster speed","Fewer gates"],answer:"Memory"},
  {question:"A latch differs from a flip-flop in that a latch:",options:["Has more outputs","Does not have a clock signal","Is faster","Uses fewer gates"],answer:"Does not have a clock signal"},
  {question:"In the SR NOR latch, the forbidden condition occurs when both inputs are:",options:["0,0","1,1","0,1","1,0"],answer:"1,1"},
  {question:"In the SR NAND latch, the forbidden condition occurs when both inputs are:",options:["0,0","1,1","0,1","1,0"],answer:"0,0"},
  {question:"A JK flip-flop with J=1 and K=1 on a clock pulse will:",options:["Set Q to 1","Reset Q to 0","Hold current state","Toggle output"],answer:"Toggle output"},
  {question:"The D flip-flop next state Q(next) equals:",options:["Q","D","D'","Q'"],answer:"D"},
  {question:"The T flip-flop output toggles when T equals:",options:["0","1","X","Both 0 and 1"],answer:"1"},
  {question:"A master-slave flip-flop changes its output on the:",options:["Positive edge only","Negative edge of the clock","Both edges simultaneously","Any time the input changes"],answer:"Negative edge of the clock"},
  {question:"A shift register is composed of a chain of:",options:["AND gates","OR gates","Flip-flops","Latches"],answer:"Flip-flops"},
  {question:"In a ring counter, the output of the last stage is fed back to:",options:["The clock input","The enable input","The input of the first stage","Ground"],answer:"The input of the first stage"},
  {question:"A Johnson counter with n stages yields a count sequence of length:",options:["n","2n","n²","2^n"],answer:"2n"},
  {question:"A ROM is different from RAM because ROM:",options:["Is faster","Cannot be written during normal operation","Uses flip-flops","Requires a clock"],answer:"Cannot be written during normal operation"}
];

// ── Subject metadata ─────────────────────────────────────────
const SUBJECTS = {
    ds: { name: 'Data Structures',       subtitle: 'Stacks, Queues, Trees, Graphs, Sorting & Searching', questions: QUESTIONS_DS },
    cn: { name: 'Computer Networks',     subtitle: 'OSI Model, TCP/IP, Protocols, Routing & Security',   questions: QUESTIONS_CN },
    os: { name: 'Operating Systems',     subtitle: 'Scheduling, Memory Management, Deadlock & File I/O', questions: QUESTIONS_OS },
    se: { name: 'Software Engineering',  subtitle: 'SDLC Models, Agile, Design Principles, Testing & Maintenance', questions: QUESTIONS_SE },
    java: { name: 'Java Programming',    subtitle: 'OOP, Inheritance, Interfaces, Threads, Collections & I/O', questions: QUESTIONS_JAVA },
    wt: { name: 'Web Technology',        subtitle: 'HTML, CSS, XML, JavaScript, AJAX, jQuery & PHP', questions: QUESTIONS_WT },
    de: { name:'Digital Electronics',    subtitle: 'Basic & Analog Electronics, Digital Electronics, Comm. & Signals, Microprocessors', questions: QUESTIONS_DE }
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
