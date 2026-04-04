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

const QUESTIONS_DBMS = [
  {question:"Which statement exits a loop in PL/SQL?",options:["BREAK","CONTINUE","STOP","EXIT"],answer:"EXIT"},
  {question:"What does ACID stand for in database transactions?",options:["Atomicity, Consistency, Isolation, Durability","Accuracy, Consistency, Integrity, Durability","Atomicity, Concurrency, Integrity, Durability","Accuracy, Concurrency, Isolation, Dependency"],answer:"Atomicity, Consistency, Isolation, Durability"},
  {question:"What is an Index in SQL used for?",options:["Storing duplicate data","Allowing faster retrieval of records","Creating virtual tables","Generating unique numbers"],answer:"Allowing faster retrieval of records"},
  {question:"Which keyword removes duplicate rows from a SQL result set?",options:["UNIQUE","DIFFERENT","SEPARATE","DISTINCT"],answer:"DISTINCT"},
  {question:"Which SQL command gives a user access privileges to the database?",options:["ALLOW","PERMIT","GRANT","ASSIGN"],answer:"GRANT"},
  {question:"What uniquely identifies each row in a table?",options:["Foreign Key","Composite Key","Candidate Key","Primary Key"],answer:"Primary Key"},
  {question:"Which of the following is NOT an aggregate function in SQL?",options:["AVG","COUNT","SUM","LENGTH"],answer:"LENGTH"},
  {question:"Which DBMS component manages the space on disk where data is stored?",options:["Query Processor","Database Engine","Transaction Manager","Storage Manager"],answer:"Storage Manager"},
  {question:"What does the FORALL statement do in PL/SQL?",options:["Iterates over a collection without DML","Fetches multiple rows into a collection","Executes a DML statement multiple times using collections","Executes SQL dynamically"],answer:"Executes a DML statement multiple times using collections"},
  {question:"Which SQL command removes rows from a table?",options:["DROP","TRUNCATE","REMOVE","DELETE"],answer:"DELETE"},
  {question:"Which MongoDB aggregation stage groups input documents by a specified expression?",options:["$match","$sort","$project","$group"],answer:"$group"},
  {question:"What is a Sequence in SQL?",options:["A type of join","A virtual table","A database object that generates unique numbers","An alias for a database object"],answer:"A database object that generates unique numbers"},
  {question:"Which SQL clause is used to filter the results of a query?",options:["SELECT","FROM","GROUP BY","WHERE"],answer:"WHERE"},
  {question:"What does BSON stand for in MongoDB?",options:["Basic JSON","Binary JSON","Basic Object Notation","Binary Object Storage"],answer:"Binary JSON"},
  {question:"Which normal form eliminates partial dependencies?",options:["1NF","2NF","3NF","BCNF"],answer:"2NF"},
  {question:"Which of the following is a collection type in PL/SQL?",options:["RECORD","ARRAY","LIST","TABLE"],answer:"TABLE"},
  {question:"Which of the following is NOT a PL/SQL data type?",options:["VARCHAR2","NUMBER","BOOLEAN","STRING"],answer:"STRING"},
  {question:"Which SQL function returns the current system date and time?",options:["CURRENT_DATE()","GETDATE()","SYSDATE()","NOW()"],answer:"NOW()"},
  {question:"What type of cursor is automatically created by Oracle when a SELECT returns a single row?",options:["Explicit Cursor","Named Cursor","Implicit Cursor","Declared Cursor"],answer:"Implicit Cursor"},
  {question:"Which SQL command removes access privileges?",options:["DENY","RESTRICT","REMOVE","REVOKE"],answer:"REVOKE"},
  {question:"Which of the following is a key feature of a DBMS?",options:["Data Redundancy","Data Duplication","Data Abstraction","Data Inconsistency"],answer:"Data Abstraction"},
  {question:"Which command creates an index in MongoDB?",options:["CREATE INDEX","ADD INDEX","MAKE INDEX","createIndex"],answer:"createIndex"},
  {question:"Which keyword is used to handle exceptions in PL/SQL?",options:["CATCH","TRY","ERROR","EXCEPTION"],answer:"EXCEPTION"},
  {question:"Which SQL aggregate function returns the maximum value in a column?",options:["COUNT","AVG","SUM","MAX"],answer:"MAX"},
  {question:"Which ACID property ensures that once a transaction is committed, it remains so?",options:["Atomicity","Isolation","Durability","Consistency"],answer:"Durability"},
  {question:"Which of the following is an example of a Graph NoSQL database?",options:["MongoDB","Redis","HBase","Neo4j"],answer:"Neo4j"},
  {question:"Which ACID property ensures each transaction brings the database from one valid state to another?",options:["Atomicity","Consistency","Isolation","Durability"],answer:"Consistency"},
  {question:"What is an Entity in the ER model?",options:["A relationship between tables","An attribute of a table","An object or thing in the real world with independent existence","A constraint on a column"],answer:"An object or thing in the real world with independent existence"},
  {question:"What is a cursor in PL/SQL?",options:["A precompiled collection of SQL statements","A variable that holds data temporarily","A function that returns multiple values","A pointer to a result set"],answer:"A pointer to a result set"},
  {question:"Which PL/SQL feature fetches multiple rows into a collection in a single operation?",options:["FORALL","Dynamic SQL","Bulk Collect","Explicit Cursor"],answer:"Bulk Collect"},
  {question:"Which SQL join returns all rows from the right table and matched rows from the left table?",options:["INNER JOIN","LEFT JOIN","FULL JOIN","RIGHT JOIN"],answer:"RIGHT JOIN"},
  {question:"What is a Package in PL/SQL?",options:["A single stored procedure","A group of related procedures, functions, variables, and other PL/SQL types","A collection of tables","A sequence of transactions"],answer:"A group of related procedures, functions, variables, and other PL/SQL types"},
  {question:"Which SQL aggregate function returns the minimum value in a column?",options:["COUNT","AVG","SUM","MIN"],answer:"MIN"},
  {question:"Which component of DBMS interprets and executes database queries?",options:["Storage Manager","Database Engine","Query Processor","Transaction Manager"],answer:"Query Processor"},
  {question:"Which type of NoSQL database uses a document-oriented model?",options:["Key-Value Store","Column Store","Graph Database","Document Store"],answer:"Document Store"},
  {question:"Which level of data abstraction deals with how data is physically stored?",options:["View Level","Logical Level","Physical Level","Schema Level"],answer:"Physical Level"},
  {question:"Which ACID property ensures that a transaction is all or nothing?",options:["Consistency","Isolation","Durability","Atomicity"],answer:"Atomicity"},
  {question:"Which SQL aggregate function returns the average value of a column?",options:["COUNT","SUM","MAX","AVG"],answer:"AVG"},
  {question:"What are relationships in the ER model?",options:["Properties of entities","Associations among entities","Columns in a table","Constraints on data"],answer:"Associations among entities"},
  {question:"Which SQL function returns the length of a text field?",options:["SIZE()","COUNT()","LEN()","MEASURE()"],answer:"LEN()"},
  {question:"Which normal form eliminates transitive dependencies?",options:["1NF","2NF","3NF","BCNF"],answer:"3NF"},
  {question:"What is the ability to change the physical schema without changing the logical schema called?",options:["Logical Data Independence","Physical Data Independence","Schema Independence","Data Abstraction"],answer:"Physical Data Independence"},
  {question:"What is the ability to change the logical schema without changing the external schema called?",options:["Physical Data Independence","Schema Flexibility","Logical Data Independence","View Independence"],answer:"Logical Data Independence"},
  {question:"Which SQL join returns all records when there is a match in either left or right table?",options:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN"],answer:"FULL OUTER JOIN"},
  {question:"What does a MongoDB replica set provide?",options:["Sharding","Indexing","Transactions","High Availability"],answer:"High Availability"},
  {question:"What does RDBMS stand for?",options:["Relational Database Management System","Remote Database Management System","Redundant Database Management System","Real-time Database Management System"],answer:"Relational Database Management System"},
  {question:"Which MongoDB method inserts a single document into a collection?",options:["insertMany","addOne","putOne","insertOne"],answer:"insertOne"},
  {question:"What are attributes in the ER model?",options:["Associations among entities","Properties of entities","Objects in the real world","Tables in the database"],answer:"Properties of entities"},
  {question:"Which of the following is an example of a Key-Value NoSQL database?",options:["MongoDB","Cassandra","Neo4j","Redis"],answer:"Redis"},
  {question:"What is a Trigger in PL/SQL?",options:["A collection of SQL statements","A function that returns a single value","A stored procedure that automatically runs when an event occurs","A precompiled query"],answer:"A stored procedure that automatically runs when an event occurs"},
  {question:"In an RDBMS, data is stored in which format?",options:["Documents","Key-Value Pairs","Rows and Columns","Graphs"],answer:"Rows and Columns"},
  {question:"What is a View in SQL?",options:["A physical table in the database","A stored procedure","A virtual table based on the result of an SQL query","An index on a table"],answer:"A virtual table based on the result of an SQL query"},
  {question:"What does DBMS stand for?",options:["Data Backup Management System","Database Management System","Data Base Monitoring System","Distributed Base Management System"],answer:"Database Management System"},
  {question:"What is a Synonym in SQL?",options:["A type of index","An alias or alternate name for a database object","A sequence of numbers","A virtual table"],answer:"An alias or alternate name for a database object"},
  {question:"Which MongoDB feature distributes data across multiple servers?",options:["Replication","Indexing","Partitioning","Sharding"],answer:"Sharding"},
  {question:"Which SQL aggregate function counts the number of rows?",options:["SUM","AVG","MAX","COUNT"],answer:"COUNT"},
  {question:"Which MongoDB aggregation stage filters documents?",options:["$group","$sort","$project","$match"],answer:"$match"},
  {question:"Which of the following is an advantage of NoSQL over RDBMS for big data?",options:["Strong ACID compliance","Strict schema enforcement","Horizontal scalability","Better support for joins"],answer:"Horizontal scalability"},
  {question:"Which SQL command is used to delete a table from the database?",options:["DELETE","REMOVE","ERASE","DROP"],answer:"DROP"},
  {question:"Which SQL command saves a transaction to the database?",options:["SAVE","STORE","COMMIT","APPLY"],answer:"COMMIT"},
  {question:"Which SQL join returns only rows with matching values in both tables?",options:["LEFT JOIN","RIGHT JOIN","FULL JOIN","INNER JOIN"],answer:"INNER JOIN"},
  {question:"Which SQL function converts a field to uppercase?",options:["UPPER()","CAPS()","CAPITALIZE()","TOUPPER()"],answer:"UPPER()"},
  {question:"Which SQL join returns all rows from the left table and matched rows from the right table?",options:["INNER JOIN","RIGHT JOIN","FULL JOIN","LEFT JOIN"],answer:"LEFT JOIN"},
  {question:"Which SQL command is used to create a new table?",options:["ADD TABLE","BUILD TABLE","NEW TABLE","CREATE TABLE"],answer:"CREATE TABLE"},
  {question:"Which MongoDB method deletes a single document?",options:["removeOne","eraseOne","dropOne","deleteOne"],answer:"deleteOne"},
  {question:"Which keyword executes dynamic SQL in PL/SQL?",options:["EXECUTE","RUN","PERFORM","EXECUTE IMMEDIATE"],answer:"EXECUTE IMMEDIATE"},
  {question:"Which SQL command modifies existing data in a table?",options:["MODIFY","ALTER","CHANGE","UPDATE"],answer:"UPDATE"},
  {question:"Which SQL command modifies an existing database object?",options:["MODIFY","CHANGE","ALTER","UPDATE"],answer:"ALTER"},
  {question:"Which MongoDB method updates multiple documents at once?",options:["updateOne","alterMany","modifyMany","updateMany"],answer:"updateMany"},
  {question:"Which of the following is a feature of NoSQL databases?",options:["Fixed Schema","SQL Support","Vertical Scalability Only","Schema-less Data Model"],answer:"Schema-less Data Model"},
  {question:"Which level of data abstraction describes how data is viewed by individual users?",options:["Physical Level","Logical Level","View Level","Internal Level"],answer:"View Level"},
  {question:"What does PL/SQL stand for?",options:["Procedural Language/Structured Query Language","Programming Language/SQL","Parallel Language/SQL","Procedural Logic/SQL"],answer:"Procedural Language/Structured Query Language"},
  {question:"Which language does RDBMS use for database access?",options:["Python","Java","XML","SQL"],answer:"SQL"},
  {question:"What format does MongoDB use to store documents?",options:["XML","CSV","YAML","BSON/JSON"],answer:"BSON/JSON"},
  {question:"What is a foreign key?",options:["A key that uniquely identifies a table","A field that links two tables together","A key used for encryption","A key that identifies multiple rows"],answer:"A field that links two tables together"},
  {question:"Which ACID property ensures transactions are isolated from one another?",options:["Atomicity","Durability","Consistency","Isolation"],answer:"Isolation"},
  {question:"Which SQL command adds new rows to a table?",options:["ADD","APPEND","INSERT","PUT"],answer:"INSERT"},
  {question:"Which SQL command retrieves data from the database?",options:["FETCH","GET","RETRIEVE","SELECT"],answer:"SELECT"},
  {question:"Which SQL command undoes transactions that have not been saved?",options:["UNDO","REVERT","RESTORE","ROLLBACK"],answer:"ROLLBACK"},
  {question:"Which level of data abstraction describes what data is stored and the relationships among data?",options:["Physical Level","View Level","Schema Level","Logical Level"],answer:"Logical Level"},
  {question:"What is normalization in RDBMS?",options:["Encrypting data in the database","Adding redundancy to improve speed","Organizing data to reduce redundancy and improve integrity","Backing up data regularly"],answer:"Organizing data to reduce redundancy and improve integrity"}
];

const QUESTIONS_IOT = [
  {question:"What is a Confirmable (CON) message in CoAP?",options:["A message that needs no reply","A message that requires an ACK for reliable delivery","A message sent in broadcast","A message for multicasting data"],answer:"A message that requires an ACK for reliable delivery"},
  {question:"How many coordinators can a ZigBee network have?",options:["Unlimited","Two","One","Five"],answer:"One"},
  {question:"What does XMPP Presence Information indicate?",options:["Device battery level","User/device status like Online, Offline, Busy","Network signal strength","Data transfer speed"],answer:"User/device status like Online, Offline, Busy"},
  {question:"What is the key characteristic of M2M communication?",options:["Requires human intervention","Works only over Bluetooth","Automatic data exchange between devices without human intervention","Uses only wired networks"],answer:"Automatic data exchange between devices without human intervention"},
  {question:"Which IEEE 802.15.4 variant uses Ultra-Wideband for high-accuracy location tracking?",options:["IEEE 802.15.4e","IEEE 802.15.4g","IEEE 802.15.4f","IEEE 802.15.4a"],answer:"IEEE 802.15.4a"},
  {question:"Which type of CoAP message is used for regular updates like temperature data?",options:["Confirmable","ACK","Broadcast","Non-Confirmable"],answer:"Non-Confirmable"},
  {question:"What does IoT stand for?",options:["Internet of Technology","Interconnection of Things","Internet of Things","Integration of Technology"],answer:"Internet of Things"},
  {question:"What is the correct flow of MQTT communication?",options:["Subscriber → Broker → Publisher","Broker → Publisher → Subscriber","Publisher → Subscriber → Broker","Publisher → Broker → Subscriber"],answer:"Publisher → Broker → Subscriber"},
  {question:"Which type of CoAP message is used for sending emergency data like fire alerts?",options:["Non-Confirmable","Broadcast","Multicast","Confirmable"],answer:"Confirmable"},
  {question:"Which component in a ZigBee network is the main controller that starts the network?",options:["End Device","Router","Access Point","Coordinator"],answer:"Coordinator"},
  {question:"What is the maximum number of active slave devices in a Bluetooth PicoNet?",options:["5","3","10","7"],answer:"7"},
  {question:"Which frequency band does Bluetooth operate in?",options:["5 GHz","900 MHz","433 MHz","2.4 GHz"],answer:"2.4 GHz"},
  {question:"Which IEEE 802.15.4 variant improves MAC layer with time-slotted communication for industrial IoT?",options:["IEEE 802.15.4a","IEEE 802.15.4f","IEEE 802.15.4g","IEEE 802.15.4e"],answer:"IEEE 802.15.4e"},
  {question:"Which type of M2M node collects data from the environment using sensors?",options:["Actuator Node","Communication Node","Processing Node","Sensing Node"],answer:"Sensing Node"},
  {question:"Which ZigBee topology provides the highest reliability with multiple communication paths?",options:["Star Topology","Ring Topology","Tree Topology","Mesh Topology"],answer:"Mesh Topology"},
  {question:"What is the role of sensors in IoT systems?",options:["Route network packets","Act as eyes and ears by collecting real-world data","Manage user interfaces","Store data in databases"],answer:"Act as eyes and ears by collecting real-world data"},
  {question:"In MQTT, what is the role of the Broker?",options:["Collects sensor data","Acts as publisher","Central server that manages communication between publishers and subscribers","Stores data permanently"],answer:"Central server that manages communication between publishers and subscribers"},
  {question:"What is a PicoNet in Bluetooth?",options:["A network of ZigBee routers","A network formed by one master and up to seven active slave devices","A cluster of Wi-Fi access points","A mesh network of NFC devices"],answer:"A network formed by one master and up to seven active slave devices"},
  {question:"In which NFC mode does a mobile phone act like a smart card for payments?",options:["Peer-to-Peer Mode","Reader/Writer Mode","Broadcast Mode","Card Emulation Mode"],answer:"Card Emulation Mode"},
  {question:"Which software is commonly associated with AMQP for managing message queues?",options:["Apache Kafka","Redis","RabbitMQ","ActiveMQ"],answer:"RabbitMQ"},
  {question:"Which of the following is the first step in how IoT works?",options:["Data is processed in cloud","Action is performed automatically","Sensors collect data","Data is sent through internet"],answer:"Sensors collect data"},
  {question:"What does AMQP stand for?",options:["Advanced Messaging Queue Protocol","Advanced Message Queuing Protocol","Automatic Message Queue Protocol","Advanced Multi-Queue Protocol"],answer:"Advanced Message Queuing Protocol"},
  {question:"Which of the following is a disadvantage of IoT in automation?",options:["High efficiency","Real-time data processing","Security risks and privacy issues","Remote control capability"],answer:"Security risks and privacy issues"},
  {question:"What happens if ACK is not received for a CON message in CoAP?",options:["Message is dropped","Message is stored","Message is retransmitted","Connection is closed"],answer:"Message is retransmitted"},
  {question:"What does CoAP stand for?",options:["Constrained Application Protocol","Connected Application Protocol","Common Application Protocol","Constrained Access Protocol"],answer:"Constrained Application Protocol"},
  {question:"What is ZigBee based on?",options:["Wi-Fi 802.11","Bluetooth 5.0","Z-Wave","IEEE 802.15.4"],answer:"IEEE 802.15.4"},
  {question:"In AMQP, which component sends messages to the exchange?",options:["Consumer","Queue","Broker","Producer"],answer:"Producer"},
  {question:"In AMQP, which component temporarily stores messages?",options:["Exchange","Producer","Consumer","Queue"],answer:"Queue"},
  {question:"In CoAP, what is used to identify resources on the server?",options:["IP Address","MAC Address","URI (Uniform Resource Identifier)","Port Number"],answer:"URI (Uniform Resource Identifier)"},
  {question:"In AMQP, which component routes messages to appropriate queues?",options:["Producer","Consumer","Queue","Exchange"],answer:"Exchange"},
  {question:"What is the maximum data rate supported by IEEE 802.15.4?",options:["1 Mbps","100 Mbps","10 Mbps","250 kbps"],answer:"250 kbps"},
  {question:"Which type of industrial automation allows machines to be reprogrammed for different tasks?",options:["Fixed Automation","Hard Automation","Flexible Automation","Programmable Automation"],answer:"Programmable Automation"},
  {question:"What is the role of the Base Station in a WSN?",options:["Acts as end device","Generates power for sensors","Collects data from sensor nodes and sends it to internet","Encrypts sensor data"],answer:"Collects data from sensor nodes and sends it to internet"},
  {question:"Which IoT application area uses GPS tracking and smart vehicles?",options:["Smart Homes","Healthcare","Smart Classrooms","Smart Transportation"],answer:"Smart Transportation"},
  {question:"Which type of NFC device does not have its own power supply?",options:["Active NFC Device","Hybrid NFC Device","Dynamic NFC Device","Passive NFC Device"],answer:"Passive NFC Device"},
  {question:"What is a key advantage of AMQP over MQTT?",options:["Simpler structure","Lower bandwidth usage","No data loss and high reliability","Lower resource requirement"],answer:"No data loss and high reliability"},
  {question:"Which type of industrial automation is designed for specific tasks only and cannot be easily changed?",options:["Flexible Automation","Programmable Automation","Adaptive Automation","Fixed Automation"],answer:"Fixed Automation"},
  {question:"What is a Scatternet in Bluetooth?",options:["A network of passive NFC devices","A network formed by connecting two or more PicoNets together","A single Bluetooth device broadcasting to all","A ZigBee mesh network"],answer:"A network formed by connecting two or more PicoNets together"},
  {question:"Which transport protocol does CoAP use?",options:["TCP","FTP","HTTP","UDP"],answer:"UDP"},
  {question:"Which sensor measures moisture in air and is used in agriculture?",options:["Temperature Sensor","Pressure Sensor","Motion Sensor","Humidity Sensor"],answer:"Humidity Sensor"},
  {question:"Which NFC mode is used to read an NFC tag on a poster?",options:["Card Emulation Mode","Peer-to-Peer Mode","Broadcast Mode","Reader/Writer Mode"],answer:"Reader/Writer Mode"},
  {question:"Which component of IoT collects real-world data?",options:["User Interface","Connectivity","Data Processing","Sensors/Devices"],answer:"Sensors/Devices"},
  {question:"NFC works based on which principle?",options:["Radio Frequency Identification","Electromagnetic Induction","Infrared Transmission","Acoustic Transmission"],answer:"Electromagnetic Induction"},
  {question:"Which ZigBee component uses the least power and cannot route data?",options:["Coordinator","Router","Bridge","End Device"],answer:"End Device"},
  {question:"What does XMPP stand for?",options:["Extended Messaging and Presence Protocol","Extensible Multimedia Presence Protocol","Extensible Messaging and Presence Protocol","Extended Message Processing Protocol"],answer:"Extensible Messaging and Presence Protocol"},
  {question:"Which ZigBee topology connects all devices to a single coordinator?",options:["Mesh Topology","Bus Topology","Tree Topology","Star Topology"],answer:"Star Topology"},
  {question:"Which type of NFC device has its own power supply and can send and receive data?",options:["Passive NFC Device","Hybrid NFC Device","Active NFC Device","Static NFC Device"],answer:"Active NFC Device"},
  {question:"In which NFC mode do two devices communicate and both can send and receive data?",options:["Card Emulation Mode","Reader/Writer Mode","Broadcast Mode","Peer-to-Peer Mode"],answer:"Peer-to-Peer Mode"},
  {question:"What frequency band does IEEE 802.15.4 operate in?",options:["5 GHz","900 MHz","2.4 GHz","433 MHz"],answer:"2.4 GHz"},
  {question:"Which type of industrial automation uses computer-controlled robots that can adapt automatically?",options:["Fixed Automation","Hard Automation","Programmable Automation","Flexible Automation"],answer:"Flexible Automation"},
  {question:"Which IEEE 802.15.4 variant is designed for smart utility networks and smart meters?",options:["IEEE 802.15.4a","IEEE 802.15.4f","IEEE 802.15.4e","IEEE 802.15.4g"],answer:"IEEE 802.15.4g"},
  {question:"In MQTT, which component sends data to the broker?",options:["Subscriber","Consumer","Router","Publisher"],answer:"Publisher"},
  {question:"What does WMSN stand for?",options:["Wide Mobile Sensor Network","Wired Multimedia Sensor Node","Wireless Multimedia Sensor Network","Wireless Monitored Sensor Node"],answer:"Wireless Multimedia Sensor Network"},
  {question:"What does IEEE 802.15.4 define?",options:["High-speed wired networking standard","Long-range satellite communication","Low-rate wireless personal area network standard","Wi-Fi communication standard"],answer:"Low-rate wireless personal area network standard"},
  {question:"What is the approximate working distance of NFC?",options:["100 meters","10 meters","4 centimeters","1 meter"],answer:"4 centimeters"},
  {question:"Which of the following is a feature of IoT?",options:["Manual data entry","Isolated networks","Real-time data monitoring","Reduced connectivity"],answer:"Real-time data monitoring"},
  {question:"What does WSN stand for?",options:["Wired Sensor Network","Wide Service Network","Wireless Sensor Network","Wireless System Node"],answer:"Wireless Sensor Network"},
  {question:"Which IoT protocol uses XML format that increases data size as a disadvantage?",options:["MQTT","CoAP","AMQP","XMPP"],answer:"XMPP"},
  {question:"What does a sensor do in an IoT system?",options:["Stores data permanently","Routes network traffic","Detects physical quantities and converts them to electrical signals","Manages cloud servers"],answer:"Detects physical quantities and converts them to electrical signals"},
  {question:"In MQTT, which component receives data from the broker?",options:["Publisher","Producer","Exchange","Subscriber"],answer:"Subscriber"},
  {question:"Which type of sensor network is deployed below the ground to monitor soil conditions?",options:["Terrestrial Sensor Network","Mobile Sensor Network","Underwater Sensor Network","Underground Sensor Network"],answer:"Underground Sensor Network"},
  {question:"Which data format does XMPP use to transmit data?",options:["JSON","YAML","CSV","XML"],answer:"XML"},
  {question:"Which WSN topology has the highest reliability with no single point of failure?",options:["Star Topology","Bus Topology","Tree Topology","Mesh Topology"],answer:"Mesh Topology"},
  {question:"What does MQTT stand for?",options:["Message Queue Transfer Technology","Multi Queue Telemetry Transport","Message Queuing Telemetry Transport","Managed Query Telemetry Transport"],answer:"Message Queuing Telemetry Transport"},
  {question:"Which IoT application is used for patient monitoring?",options:["Smart Homes","Transportation","Healthcare","Smart Cities"],answer:"Healthcare"},
  {question:"In XMPP, what is a Stanza?",options:["A type of encryption","An XML element used for communication","A network node","A routing protocol"],answer:"An XML element used for communication"},
  {question:"Which WSN topology fails completely if the central node fails?",options:["Mesh Topology","Tree Topology","Ring Topology","Star Topology"],answer:"Star Topology"},
  {question:"Which sensor is used in gas leakage detectors?",options:["Humidity Sensor","Motion Sensor","Gas Sensor","Pressure Sensor"],answer:"Gas Sensor"},
  {question:"Which ZigBee component extends the network range by routing data?",options:["Coordinator","End Device","Bridge","Router"],answer:"Router"},
  {question:"Which communication model does MQTT use?",options:["Client-Server","Request-Response","Peer-to-Peer","Publish-Subscribe"],answer:"Publish-Subscribe"}
];

const QUESTIONS_BD = [
  {question:"Which type of Data Warehouse provides a logical view of data without physically storing it?",options:["Enterprise Data Warehouse","Operational Data Store","Data Mart","Virtual Data Warehouse"],answer:"Virtual Data Warehouse"},
  {question:"Which type of analytics answers the question 'What happened?'",options:["Prescriptive Analytics","Predictive Analytics","Diagnostic Analytics","Descriptive Analytics"],answer:"Descriptive Analytics"},
  {question:"Which step in Text Data Mining breaks text into words or sentences?",options:["Transformation","Text Collection","Sentiment Analysis","Tokenization"],answer:"Tokenization"},
  {question:"What type of learning does Clustering use?",options:["Supervised Learning","Reinforcement Learning","Unsupervised Learning","Deep Learning"],answer:"Unsupervised Learning"},
  {question:"Which OLAP operation selects data from one single dimension of a cube?",options:["Pivot","Roll-Up","Dice","Slice"],answer:"Slice"},
  {question:"Which type of OLAP is a combination of MOLAP and ROLAP?",options:["DOLAP","ROLAP","MOLAP","HOLAP"],answer:"HOLAP"},
  {question:"Which technologies are primarily associated with the Big Data era?",options:["SQL and Oracle","Excel and Access","DBMS and SQL","Hadoop and Spark"],answer:"Hadoop and Spark"},
  {question:"What does Data Analytics aim to do?",options:["Store large volumes of data","Physically delete old data","Transmit data over networks","Examine and analyze data to support decision-making"],answer:"Examine and analyze data to support decision-making"},
  {question:"What does OLTP stand for?",options:["Online Transfer and Processing","Offline Transaction Protocol","Operational Large-scale Transfer Protocol","Online Transaction Processing"],answer:"Online Transaction Processing"},
  {question:"What is the relationship between KDD and Data Mining?",options:["Data Mining is the complete process; KDD is one step","They are completely unrelated","KDD and Data Mining are the same thing","Data Mining is one step inside the broader KDD process"],answer:"Data Mining is one step inside the broader KDD process"},
  {question:"Which type of data mining analyzes and summarizes past data to find patterns?",options:["Predictive Data Mining","Outlier Detection","Regression","Descriptive Data Mining"],answer:"Descriptive Data Mining"},
  {question:"Which type of Data Warehouse is a centralized system that stores data for the entire organization?",options:["Data Mart","Virtual Data Warehouse","Operational Data Store","Enterprise Data Warehouse (EDW)"],answer:"Enterprise Data Warehouse (EDW)"},
  {question:"Which type of analytics answers the question 'Why did it happen?'",options:["Prescriptive Analytics","Descriptive Analytics","Predictive Analytics","Diagnostic Analytics"],answer:"Diagnostic Analytics"},
  {question:"Which characteristic of a Data Warehouse means it is organized around subjects like sales or customers?",options:["Integrated","Time-Variant","Non-Volatile","Subject-Oriented"],answer:"Subject-Oriented"},
  {question:"Which type of Big Data structure is partially organized and includes formats like JSON and XML?",options:["Structured Data","Encoded Data","Unstructured Data","Semi-Structured Data"],answer:"Semi-Structured Data"},
  {question:"What is a Data Warehouse?",options:["A distributed processing framework","A centralized repository for collecting and storing large amounts of data for analysis","A real-time transaction system","A social media platform"],answer:"A centralized repository for collecting and storing large amounts of data for analysis"},
  {question:"Which of the following is a popular Data Mining tool?",options:["Photoshop","AutoCAD","WEKA","Microsoft Word"],answer:"WEKA"},
  {question:"Which data mining technique assigns data into predefined categories?",options:["Clustering","Regression","Association","Classification"],answer:"Classification"},
  {question:"Which era introduced DBMS and SQL for structured storage of data?",options:["1960s – Data Collection","2010s – Big Data","1990s – Data Warehousing","1970s–1980s – Database Systems"],answer:"1970s–1980s – Database Systems"},
  {question:"Which tool is used for Data Mining and analytics alongside WEKA?",options:["Power BI","RapidMiner","Tableau","Excel"],answer:"RapidMiner"},
  {question:"Which type of analytics answers the question 'What should we do?'",options:["Predictive Analytics","Descriptive Analytics","Diagnostic Analytics","Prescriptive Analytics"],answer:"Prescriptive Analytics"},
  {question:"Which framework is used for batch processing of Big Data?",options:["MongoDB","OLAP","MySQL","MapReduce"],answer:"MapReduce"},
  {question:"Which system uses historical data for analysis while OLTP uses current data?",options:["RDBMS","OLTP","ETL","OLAP"],answer:"OLAP"},
  {question:"Which type of Data Warehouse is small and focused on a specific department?",options:["Enterprise Data Warehouse","Virtual Data Warehouse","Operational Data Store","Data Mart"],answer:"Data Mart"},
  {question:"What does ETL stand for in Data Mining Architecture?",options:["Evaluate, Transfer, Load","Extract, Transform, Load","Extract, Test, Link","Evaluate, Translate, Log"],answer:"Extract, Transform, Load"},
  {question:"Which data mining technique finds relationships between items such as 'people who buy milk also buy bread'?",options:["Clustering","Regression","Classification","Association"],answer:"Association"},
  {question:"Which type of OLAP stores data in multidimensional cube format for very fast query performance?",options:["ROLAP","DOLAP","HOLAP","MOLAP"],answer:"MOLAP"},
  {question:"Which Data Warehouse design approach builds Data Marts first and then combines them?",options:["Top-Down Approach","Hybrid Approach","Federated Approach","Bottom-Up Approach (Kimball)"],answer:"Bottom-Up Approach (Kimball)"},
  {question:"Which type of analytics answers the question 'What will happen?'",options:["Diagnostic Analytics","Descriptive Analytics","Prescriptive Analytics","Predictive Analytics"],answer:"Predictive Analytics"},
  {question:"Which OLAP operation selects data from multiple dimensions simultaneously?",options:["Slice","Roll-Up","Pivot","Dice"],answer:"Dice"},
  {question:"Which technique converts text into a structured format using methods like TF-IDF?",options:["Tokenization","Text Collection","Transformation","Clustering"],answer:"Transformation"},
  {question:"What is Metadata?",options:["Processed output of data mining","Large unstructured data files","Data about data that describes its structure, meaning, and properties","Raw data collected from sensors"],answer:"Data about data that describes its structure, meaning, and properties"},
  {question:"What is Text Data Mining also known as?",options:["Data Warehousing","Text Mining","Data Transformation","Sentiment Storage"],answer:"Text Mining"},
  {question:"Which component of Data Mining Architecture is considered the core part that applies algorithms?",options:["ETL Process","Data Sources","User Interface","Data Mining Engine"],answer:"Data Mining Engine"},
  {question:"Which data mining technique groups similar data without predefined labels?",options:["Classification","Regression","Prediction","Clustering"],answer:"Clustering"},
  {question:"Which Big Data framework performs fast, in-memory processing?",options:["Hadoop","MapReduce","MySQL","Apache Spark"],answer:"Apache Spark"},
  {question:"What is the correct working flow in Data Mining Architecture?",options:["Data Mining Engine → ETL → Data Sources → User Interface","User Interface → Data Warehouse → ETL → Data Sources","Data Sources → ETL → Data Warehouse → Data Mining Engine → Pattern Evaluation → User Interface","Data Sources → Data Mining Engine → ETL → User Interface"],answer:"Data Sources → ETL → Data Warehouse → Data Mining Engine → Pattern Evaluation → User Interface"},
  {question:"What is Data Mining?",options:["Process of storing large datasets","Process of extracting useful patterns and knowledge from large amounts of data","Process of creating databases","Process of transmitting data over networks"],answer:"Process of extracting useful patterns and knowledge from large amounts of data"},
  {question:"Which Data Warehouse design approach builds the Data Warehouse first, then creates Data Marts?",options:["Hybrid Approach","Bottom-Up Approach (Kimball)","Federated Approach","Top-Down Approach (Inmon)"],answer:"Top-Down Approach (Inmon)"},
  {question:"Which type of OLAP stores data in relational databases and uses SQL queries?",options:["MOLAP","DOLAP","HOLAP","ROLAP"],answer:"ROLAP"},
  {question:"Which tool is commonly used for Data Analytics visualization?",options:["WEKA","RapidMiner","KNIME","Tableau"],answer:"Tableau"},
  {question:"Which type of data mining is used to predict future outcomes?",options:["Descriptive Data Mining","Clustering","Predictive Data Mining","Association"],answer:"Predictive Data Mining"},
  {question:"Which type of Big Data structure includes emails, images, videos, and audio with no fixed format?",options:["Semi-Structured Data","Encoded Data","Structured Data","Unstructured Data"],answer:"Unstructured Data"},
  {question:"What is the first step in the Data Mining Implementation Process?",options:["Data Collection","Data Cleaning","Problem Definition","Data Transformation"],answer:"Problem Definition"},
  {question:"Which characteristic of a Data Warehouse means it combines data from multiple sources?",options:["Non-Volatile","Subject-Oriented","Time-Variant","Integrated"],answer:"Integrated"},
  {question:"What type of learning does Classification use?",options:["Unsupervised Learning","Reinforcement Learning","Semi-supervised Learning","Supervised Learning"],answer:"Supervised Learning"},
  {question:"Which data mining technique is used to predict continuous values like house prices?",options:["Association","Classification","Clustering","Regression"],answer:"Regression"},
  {question:"Which 'V' of Big Data refers to the speed at which data is generated and processed?",options:["Volume","Value","Veracity","Velocity"],answer:"Velocity"},
  {question:"Which OLAP operation changes the view or orientation of data by interchanging rows and columns?",options:["Dice","Slice","Roll-Up","Pivot"],answer:"Pivot"},
  {question:"Which 'V' of Big Data refers to the quality and reliability of data?",options:["Volume","Value","Variety","Veracity"],answer:"Veracity"},
  {question:"What does Big Data refer to?",options:["Data stored only in relational databases","Small datasets processed using Excel","Very large, complex, and fast-growing data that cannot be processed using traditional tools","Data encrypted for security purposes"],answer:"Very large, complex, and fast-growing data that cannot be processed using traditional tools"},
  {question:"Which data mining technique identifies unusual or abnormal data points?",options:["Prediction","Association","Regression","Outlier Detection"],answer:"Outlier Detection"},
  {question:"Which OLAP operation summarizes data by moving from a detailed level to a higher level?",options:["Drill-Down","Pivot","Slice","Roll-Up"],answer:"Roll-Up"},
  {question:"Which step in the Data Mining process removes errors, missing values, and duplicates?",options:["Data Transformation","Data Collection","Data Mining","Data Cleaning"],answer:"Data Cleaning"},
  {question:"What does OLAP stand for?",options:["Online Logical Analysis Protocol","Online Analytical Processing","Operational Large-scale Analytics Processing","Offline Analytical Processing"],answer:"Online Analytical Processing"},
  {question:"Which era introduced Data Warehousing for centralized storage and reporting?",options:["1960s","1970s–1980s","2010s","1990s"],answer:"1990s"},
  {question:"Which 'V' of Big Data refers to the different types of data such as text, images, and videos?",options:["Volume","Velocity","Value","Variety"],answer:"Variety"},
  {question:"Which 'V' of Big Data refers to the amount of data generated?",options:["Velocity","Veracity","Value","Volume"],answer:"Volume"},
  {question:"Which system is used for day-to-day transactions like ATM operations and online shopping?",options:["OLAP","Data Warehouse","Data Mart","OLTP"],answer:"OLTP"},
  {question:"Which type of Big Data structure is organized in rows and columns stored in RDBMS?",options:["Semi-Structured Data","Unstructured Data","Encoded Data","Structured Data"],answer:"Structured Data"}
];

const QUESTIONS_PY = [
  {question:"Which function is used to open a file in Python?",options:["file()","read()","open()","load()"],answer:"open()"},
  {question:"What is the difference between an Error and an Exception in Python?",options:["Errors are handled; Exceptions are not","Errors occur only at runtime; Exceptions occur only at compile time","Both are exactly the same thing","Errors are serious issues that stop execution; Exceptions are conditions that can be handled"],answer:"Errors are serious issues that stop execution; Exceptions are conditions that can be handled"},
  {question:"What are arguments in a Python function?",options:["Variables declared at the top of the file","Values returned by the function","Variables defined in the function header","Actual values passed to the function when it is called"],answer:"Actual values passed to the function when it is called"},
  {question:"Which statement is used to exit a loop immediately in Python?",options:["exit","stop","continue","break"],answer:"break"},
  {question:"Which of the following correctly creates a tuple in Python?",options:["t = [1, 2, 3]","t = {1, 2, 3}","t = (1, 2, 3)","t = <1, 2, 3>"],answer:"t = (1, 2, 3)"},
  {question:"Which of the following correctly creates a list in Python?",options:["list = (1, 2, 3)","list = {1, 2, 3}","list = [1, 2, 3]","list = <1, 2, 3>"],answer:"list = [1, 2, 3]"},
  {question:"Which block is used to handle exceptions in Python?",options:["catch-throw","error-handle","do-rescue","try-except"],answer:"try-except"},
  {question:"Which keyword is used to import a module in Python?",options:["include","require","use","import"],answer:"import"},
  {question:"What does the logical operator 'and' return when both conditions are True?",options:["False","None","0","True"],answer:"True"},
  {question:"Which loop iterates over a sequence of items in Python?",options:["repeat","do-while","while","for"],answer:"for"},
  {question:"Which symbol is used to define variable-length positional arguments in Python?",options:["**","//","*","&"],answer:"*"},
  {question:"What is Method Overriding in Python?",options:["Defining a method with variable arguments","Creating a new method in the parent class","Redefining a parent class method in a child class","Importing a method from a module"],answer:"Redefining a parent class method in a child class"},
  {question:"What is aliasing in Python lists?",options:["Creating a sorted copy of a list","Giving a list a new variable name that points to the same list object","Reversing a list","Removing duplicate elements"],answer:"Giving a list a new variable name that points to the same list object"},
  {question:"What is the flow of execution in Python?",options:["Functions are executed before the main program","Execution happens randomly","Statements are executed from top to bottom unless interrupted","Execution starts from the last line"],answer:"Statements are executed from top to bottom unless interrupted"},
  {question:"Which of the following is a Bitwise AND operator in Python?",options:["|","^","~","&"],answer:"&"},
  {question:"Which operator is used for exponentiation in Python?",options:["^","//","*","**"],answer:"**"},
  {question:"What keyword is used to define a function in Python?",options:["function","define","func","def"],answer:"def"},
  {question:"Which function is used to get user input in Python?",options:["scan()","read()","get()","input()"],answer:"input()"},
  {question:"Which operator checks if a value exists within a sequence?",options:["is","in","==","has"],answer:"in"},
  {question:"Which property of strings means they cannot be changed after creation?",options:["Mutability","Volatility","Immutability","Flexibility"],answer:"Immutability"},
  {question:"Which command installs a package using PIP?",options:["pip install package_name","pip add package_name","pip get package_name","python install package_name"],answer:"pip install package_name"},
  {question:"What is a Python Array?",options:["A dictionary of key-value pairs","A set of unique values","A collection of items of the same data type stored sequentially","A string of characters"],answer:"A collection of items of the same data type stored sequentially"},
  {question:"Which symbol is used to define variable-length keyword arguments in Python?",options:["*","//","&","**"],answer:"**"},
  {question:"What is string slicing in Python?",options:["Deleting characters from a string","Sorting characters of a string","Joining two strings","Extracting a portion of a string using index range"],answer:"Extracting a portion of a string using index range"},
  {question:"What is a Fruitful Function?",options:["A function that imports modules","A function that takes no arguments","A function that contains a loop","A function that returns a value"],answer:"A function that returns a value"},
  {question:"Which of the following correctly creates a dictionary in Python?",options:["d = ['key':'value']","d = ('key', 'value')","d = {'key': 'value'}","d = ['key', 'value']"],answer:"d = {'key': 'value'}"},
  {question:"Which assignment operator adds and assigns in one step?",options:["=+","+=","+==","++"],answer:"+="},
  {question:"What is the output of bool(0) in Python?",options:["1","True","None","False"],answer:"False"},
  {question:"What does PIP stand for in Python?",options:["Python Installation Protocol","Python Integrated Package","Pip Installs Packages","Python Import Program"],answer:"Pip Installs Packages"},
  {question:"Which statement is used to import a specific function from a module?",options:["import function from module","include module.function","use module import function","from module import function"],answer:"from module import function"},
  {question:"What is the output of 'Hello' + ' ' + 'World'?",options:["Hello World","HelloWorld","Error","'Hello' 'World'"],answer:"Hello World"},
  {question:"How do you write a single-line comment in Python?",options:["// comment","/* comment */","-- comment","# comment"],answer:"# comment"},
  {question:"Which loop keeps executing as long as a condition is True?",options:["for loop","do-while loop","repeat loop","while loop"],answer:"while loop"},
  {question:"Which data structure in Python stores unique, unordered elements?",options:["List","Tuple","Dictionary","Set"],answer:"Set"},
  {question:"What does the string method strip() do?",options:["Converts to uppercase","Splits the string","Reverses the string","Removes leading and trailing whitespace"],answer:"Removes leading and trailing whitespace"},
  {question:"Which operator checks if two variables point to the same object?",options:["==","is","in","==="],answer:"is"},
  {question:"What is Tuple Assignment in Python?",options:["Assigning a new element to a tuple","Assigning values to multiple variables from a tuple in one statement","Deleting a tuple","Sorting a tuple"],answer:"Assigning values to multiple variables from a tuple in one statement"},
  {question:"What is the output of type(3.14) in Python?",options:["<class 'int'>","<class 'double'>","<class 'float'>","<class 'number'>"],answer:"<class 'float'>"},
  {question:"What keyword is used to define a class in Python?",options:["def","object","struct","class"],answer:"class"},
  {question:"What is the correct symbol for the modulus operator in Python?",options:["//","mod","^","%"],answer:"%"},
  {question:"What is a Default Argument in Python?",options:["An argument with no value","An argument passed as a keyword","A variable-length argument","An argument that has a predefined value if none is provided"],answer:"An argument that has a predefined value if none is provided"},
  {question:"What is an Anonymous Function in Python?",options:["A function with no return value","A function defined without a name using the lambda keyword","A function inside a class","A function imported from a module"],answer:"A function defined without a name using the lambda keyword"},
  {question:"How do you define a User Defined Exception in Python?",options:["By importing the exceptions module","By using the raise keyword alone","By creating a class that inherits from the Exception class","By using the try block"],answer:"By creating a class that inherits from the Exception class"},
  {question:"What is list slicing in Python?",options:["Removing all elements from a list","Sorting the list","Reversing the list","Extracting a subset of a list using index range"],answer:"Extracting a subset of a list using index range"},
  {question:"What is the output of: for i in range(3): print(i)?",options:["1 2 3","0 1 2 3","0 1 2","1 2"],answer:"0 1 2"},
  {question:"What is a Python Package?",options:["A single Python file","A collection of modules organized in a directory with an __init__.py file","A built-in Python function","A Python class"],answer:"A collection of modules organized in a directory with an __init__.py file"},
  {question:"Which statement skips the current iteration and moves to the next in Python?",options:["pass","break","skip","continue"],answer:"continue"},
  {question:"How do you access the first element of an array in Python?",options:["array[1]","array(0)","array.first()","array[0]"],answer:"array[0]"},
  {question:"Which method returns all keys of a dictionary in Python?",options:["dict.items()","dict.values()","dict.all()","dict.keys()"],answer:"dict.keys()"},
  {question:"Which of the following is a Boolean value in Python?",options:["true","TRUE","True","yes"],answer:"True"},
  {question:"What does the string method upper() do?",options:["Returns the length of the string","Reverses the string","Converts all characters to uppercase","Removes whitespace"],answer:"Converts all characters to uppercase"},
  {question:"What is cloning a list in Python?",options:["Reversing the list elements","Removing duplicates","Creating a separate independent copy of a list","Sorting a list"],answer:"Creating a separate independent copy of a list"},
  {question:"What is a variable in Python?",options:["A fixed constant value","A reserved keyword","A named location in memory that stores a value","A data type"],answer:"A named location in memory that stores a value"},
  {question:"Which of the following is a list operation in Python?",options:["list.push()","list.enqueue()","list.append()","list.insert_end()"],answer:"list.append()"},
  {question:"What is Inheritance in Python OOP?",options:["Hiding data inside a class","A mechanism where a child class acquires properties and methods of a parent class","Defining multiple methods with the same name","Overriding a constructor"],answer:"A mechanism where a child class acquires properties and methods of a parent class"},
  {question:"What is the precedence order in Python? (Highest first)",options:["Addition → Multiplication → Parentheses","Parentheses → Exponentiation → Multiplication/Division → Addition/Subtraction","Multiplication → Parentheses → Exponentiation","Exponentiation → Parentheses → Multiplication"],answer:"Parentheses → Exponentiation → Multiplication/Division → Addition/Subtraction"},
  {question:"What is the result of 10 // 3 in Python?",options:["3.33","3","1","4"],answer:"3"},
  {question:"Which file mode is used to open a file for writing in Python?",options:["r","a","x","w"],answer:"w"},
  {question:"What is a Local Variable in Python?",options:["A variable accessible throughout the program","A variable defined inside a function and accessible only within it","A variable declared using the global keyword","A module-level variable"],answer:"A variable defined inside a function and accessible only within it"},
  {question:"What is Data Hiding in Python OOP?",options:["Deleting class attributes","Restricting access to internal data of a class using private variables","Storing data in files","Encrypting data using algorithms"],answer:"Restricting access to internal data of a class using private variables"},
  {question:"Which file mode opens a file for appending data in Python?",options:["w","r","x","a"],answer:"a"},
  {question:"Which of the following is a valid Python data type?",options:["char","int","varchar","decimal"],answer:"int"},
  {question:"What does list mutability mean in Python?",options:["Lists cannot be changed after creation","List elements can be modified after creation","Lists are automatically sorted","Lists can only hold strings"],answer:"List elements can be modified after creation"},
  {question:"What is a Keyword Argument in Python?",options:["An argument passed with its parameter name explicitly","An argument passed by position","An argument with a default value","A variable-length argument"],answer:"An argument passed with its parameter name explicitly"},
  {question:"Which control flow statement is used to check multiple conditions in Python?",options:["if-else-elif","if-elif-else","switch-case","if-else-if"],answer:"if-elif-else"},
  {question:"What is 'self' in a Python class?",options:["A global variable","A keyword that imports modules","A reference to the current instance of the class","A built-in function"],answer:"A reference to the current instance of the class"},
  {question:"What does the 'pass' statement do in Python?",options:["Exits the program","Breaks the loop","Skips the current iteration","Acts as a placeholder that does nothing"],answer:"Acts as a placeholder that does nothing"},
  {question:"What is the name of the constructor method in Python?",options:["__start__","__new__","__construct__","__init__"],answer:"__init__"},
  {question:"What is a Global Variable in Python?",options:["A variable declared inside a function","A variable accessible only inside a loop","A constant that never changes","A variable defined outside all functions and accessible throughout the program"],answer:"A variable defined outside all functions and accessible throughout the program"},
  {question:"Which keyword is used to manually raise an exception in Python?",options:["throw","error","raise","trigger"],answer:"raise"}
];

// ── Subject metadata ─────────────────────────────────────────
const SUBJECTS = {
    ds: { name: 'Data Structures',       subtitle: 'Stacks, Queues, Trees, Graphs, Sorting & Searching', questions: QUESTIONS_DS },
    cn: { name: 'Computer Networks',     subtitle: 'OSI Model, TCP/IP, Protocols, Routing & Security',   questions: QUESTIONS_CN },
    os: { name: 'Operating Systems',     subtitle: 'Scheduling, Memory Management, Deadlock & File I/O', questions: QUESTIONS_OS },
    se: { name: 'Software Engineering',  subtitle: 'SDLC Models, Agile, Design Principles, Testing & Maintenance', questions: QUESTIONS_SE },
    java: { name: 'Java Programming',    subtitle: 'OOP, Inheritance, Interfaces, Threads, Collections & I/O', questions: QUESTIONS_JAVA },
    wt: { name: 'Web Technology',        subtitle: 'HTML, CSS, XML, JavaScript, AJAX, jQuery & PHP', questions: QUESTIONS_WT },
    de: { name:'Digital Electronics',    subtitle: 'Basic & Analog Electronics, Digital Electronics, Comm. & Signals, Microprocessors', questions: QUESTIONS_DE },
    dbms: { name: 'DBMS',                subtitle: 'RDBMS, SQL, PL/SQL, NoSQL & MongoDB', questions: QUESTIONS_DBMS },
    iot: { name: 'Internet of Things',   subtitle: 'Sensors, Protocols, WSN, Communication & Automation', questions: QUESTIONS_IOT },
    bd: { name: 'Big Data',              subtitle: 'Data Mining, Analytics, Warehousing, OLAP & Big Data', questions: QUESTIONS_BD },
    py: { name: 'Python Programming',    subtitle: 'Syntax, OOP, Data Structures, File Handling & Exceptions', questions: QUESTIONS_PY },
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

    quizSubmitted = true;
    window.location.href = 'result.html';
});

window.onload = initQuiz;

// ── Navigation guard ──────────────────────────────────────────
let quizSubmitted = false;

let pendingHref = null;

document.addEventListener('click', e => {
    if (quizSubmitted) return;
    const anchor = e.target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const answered = quizQuestions.filter(q =>
        document.querySelector(`input[name="question-${q.id}"]:checked`)
    ).length;

    if (answered === 0) return;

    e.preventDefault();
    pendingHref = href;
    document.getElementById('nav-guard-banner').classList.add('show');
});

document.getElementById('nav-guard-cancel').addEventListener('click', () => {
    document.getElementById('nav-guard-banner').classList.remove('show');
    pendingHref = null;
});

document.getElementById('nav-guard-confirm').addEventListener('click', () => {
    if (pendingHref) {
        quizSubmitted = true;
        window.location.href = pendingHref;
    }
});

// Browser back / refresh / tab close
window.addEventListener('beforeunload', e => {
    if (quizSubmitted) return;
    const answered = quizQuestions.filter(q =>
        document.querySelector(`input[name="question-${q.id}"]:checked`)
    ).length;
    if (answered > 0) {
        e.preventDefault();
        e.returnValue = '';
    }
});
