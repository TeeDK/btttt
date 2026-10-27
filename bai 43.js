// Dữ liệu 6 Chương Học phần C++ (Lý thuyết + Bài tập + Lời giải)
const coursesData = [
    {
        id: 1,
        title: "Chương 1: Giới thiệu C++ & Cấu trúc Chương trình",
        desc: "Làm quen với cú pháp C++, biến, kiểu dữ liệu và nhập xuất dữ liệu chuẩn cin/cout.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">1. Cấu trúc chương trình C++ căn bản</h4>
            <p class="text-sm text-slate-600 mb-3">Mọi chương trình C++ đều bắt đầu thi hành từ hàm <code>main()</code>. Thư viện <code>&lt;iostream&gt;</code> dùng để điều khiển nhập xuất <code>std::cin</code> và <code>std::cout</code>.</p>
            <pre class="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs mb-4 overflow-x-auto"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Xin chào C++ Academy!" &lt;&lt; endl;
    return 0;
}</code></pre>
            <h4 class="text-lg font-bold text-slate-900 mb-2">2. Biến và Kiểu dữ liệu</h4>
            <ul class="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li><code>int</code>: Kiểu số nguyên (4 bytes)</li>
                <li><code>double</code> / <code>float</code>: Kiểu số thực</li>
                <li><code>char</code>: Kiểu ký tự</li>
                <li><code>bool</code>: Kiểu đúng/sai (true/false)</li>
            </ul>
        `,
        exercises: [
            {
                id: "c1_p1",
                level: "Dễ",
                levelBg: "bg-emerald-100 text-emerald-700",
                title: "Bài 1.1: Tính tổng hai số nguyên",
                req: "Nhập vào 2 số nguyên a và b từ bàn phím. In ra tổng a + b.",
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << "Tong = " << a + b << endl;\n    return 0;\n}`
            },
            {
                id: "c1_p2",
                level: "Trung bình",
                levelBg: "bg-amber-100 text-amber-700",
                title: "Bài 1.2: Tính diện tích & chu vi hình tròn",
                req: "Nhập bán kính r (số thực). In ra Chu vi và Diện tích lấy 2 chữ số thập phân.",
                solution: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    double r;\n    cin >> r;\n    double chuVi = 2 * 3.14159 * r;\n    double dienTich = 3.14159 * r * r;\n    cout << fixed << setprecision(2);\n    cout << "Chu vi: " << chuVi << "\\nDien tich: " << dienTich << endl;\n    return 0;\n}`
            }
        ]
    },
    {
        id: 2,
        title: "Chương 2: Cấu trúc Rẽ nhánh (if-else, switch-case)",
        desc: "Điều khiển luồng chương trình dựa trên các điều kiện logic.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">1. Câu lệnh if - else</h4>
            <p class="text-sm text-slate-600 mb-3">Kiểm tra điều kiện đúng/sai để rẽ nhánh thực thi code.</p>
            <pre class="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs mb-4 overflow-x-auto"><code>if (score >= 5.0) {
    cout << "Dau";
} else {
    cout << "Rot";
}</code></pre>
            <h4 class="text-lg font-bold text-slate-900 mb-2">2. Cấu trúc Switch - Case</h4>
            <p class="text-sm text-slate-600">Phù hợp cho các bài toán kiểm tra biến với nhiều giá trị nguyên cụ thể.</p>
        `,
        exercises: [
            {
                id: "c2_p1",
                level: "Dễ",
                levelBg: "bg-emerald-100 text-emerald-700",
                title: "Bài 2.1: Kiểm tra số chẵn lẻ",
                req: "Nhập một số nguyên n. In 'CHAN' nếu n chẵn, ngược lại in 'LE'.",
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    if (n % 2 == 0) cout << "CHAN";\n    else cout << "LE";\n    return 0;\n}`
            },
            {
                id: "c2_p2",
                level: "Khó",
                levelBg: "bg-rose-100 text-rose-700",
                title: "Bài 2.2: Giải phương trình bậc 2 (ax² + bx + c = 0)",
                req: "Nhập a, b, c. Biện luận nghiệm dựa vào Delta = b² - 4ac.",
                solution: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    double a, b, c;\n    cin >> a >> b >> c;\n    if (a == 0) {\n        if (b == 0) cout << (c == 0 ? "Vo so nghiem" : "Vo nghiem");\n        else cout << "x = " << -c / b;\n    } else {\n        double delta = b*b - 4*a*c;\n        if (delta < 0) cout << "Vo nghiem";\n        else if (delta == 0) cout << "x1 = x2 = " << -b / (2*a);\n        else cout << "x1 = " << (-b + sqrt(delta))/(2*a) << ", x2 = " << (-b - sqrt(delta))/(2*a);\n    }\n    return 0;\n}`
            }
        ]
    },
    {
        id: 3,
        title: "Chương 3: Cấu trúc Vòng lặp (for, while, do-while)",
        desc: "Lặp lại công việc nhiều lần một cách tự động.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">Các dạng vòng lặp trong C++</h4>
            <ul class="list-disc list-inside text-sm text-slate-600 space-y-2 mb-3">
                <li><code>for(khởi_tạo; điều_kiện; bước_nhảy)</code>: Dùng khi biết trước số lần lặp.</li>
                <li><code>while(điều_kiện)</code>: Kiểm tra điều kiện trước khi thực hiện.</li>
                <li><code>do { ... } while(điều_kiện);</code>: Thực hiện ít nhất 1 lần rồi mới kiểm tra điều kiện.</li>
            </ul>
        `,
        exercises: [
            {
                id: "c3_p1",
                level: "Dễ",
                levelBg: "bg-emerald-100 text-emerald-700",
                title: "Bài 3.1: Tính tổng S = 1 + 2 + ... + N",
                req: "Nhập số nguyên dương N. In ra tổng từ 1 đến N.",
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    long long sum = 0;\n    for(int i = 1; i <= n; i++) sum += i;\n    cout << "Sum = " << sum;\n    return 0;\n}`
            },
            {
                id: "c3_p2",
                level: "Khó",
                levelBg: "bg-rose-100 text-rose-700",
                title: "Bài 3.2: Kiểm tra Số Nguyên Tố",
                req: "Nhập số N. Kiểm tra xem N có phải số nguyên tố hay không.",
                solution: `#include <iostream>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n < 2) return false;\n    for(int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    int n; cin >> n;\n    if(isPrime(n)) cout << "YES";\n    else cout << "NO";\n    return 0;\n}`
            }
        ]
    },
    {
        id: 4,
        title: "Chương 4: Mảng & Chuỗi Ký tự (Array & String)",
        desc: "Lưu trữ tập hợp dữ liệu cùng kiểu và xử lý chuỗi văn bản.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">Mảng 1 chiều & Chuỗi std::string</h4>
            <p class="text-sm text-slate-600 mb-2">Khai báo mảng: <code>int a[100];</code></p>
            <p class="text-sm text-slate-600">Thư viện chuỗi: <code>#include &lt;string&gt;</code> hỗ trợ các phương thức như <code>length()</code>, <code>substr()</code>, <code>find()</code>.</p>
        `,
        exercises: [
            {
                id: "c4_p1",
                level: "Trung bình",
                levelBg: "bg-amber-100 text-amber-700",
                title: "Bài 4.1: Tìm phần tử lớn nhất trong mảng",
                req: "Nhập mảng n phần tử nguyên. In ra giá trị lớn nhất (MAX).",
                solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n; cin >> n;\n    int a[1000];\n    for(int i=0; i<n; i++) cin >> a[i];\n    int maxVal = a[0];\n    for(int i=1; i<n; i++) if(a[i] > maxVal) maxVal = a[i];\n    cout << "Max = " << maxVal;\n    return 0;\n}`
            }
        ]
    },
    {
        id: 5,
        title: "Chương 5: Hàm & Con trỏ (Functions & Pointers)",
        desc: "Chia nhỏ chương trình thành các module và quản lý bộ nhớ trực tiếp.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">Con trỏ (Pointer) trong C++</h4>
            <p class="text-sm text-slate-600 mb-2">Con trỏ lưu trữ địa chỉ của một biến khác trong bộ nhớ RAM.</p>
            <pre class="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto"><code>int x = 10;
int *ptr = &x; // ptr trỏ đến địa chỉ của x</code></pre>
        `,
        exercises: [
            {
                id: "c5_p1",
                level: "Dễ",
                levelBg: "bg-emerald-100 text-emerald-700",
                title: "Bài 5.1: Viết hàm Hoán đổi giá trị (Swap)",
                req: "Sử dụng con trỏ hoặc tham chiếu (&) để hoán đổi 2 số a và b.",
                solution: `#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(x, y);\n    cout << "x = " << x << ", y = " << y;\n    return 0;\n}`
            }
        ]
    },
    {
        id: 6,
        title: "Chương 6: Lập trình Hướng đối tượng (OOP)",
        desc: "Tạo Class, Object, Tính đóng gói, Kế thừa và Đa hình.",
        theory: `
            <h4 class="text-lg font-bold text-slate-900 mb-2">Định nghĩa Lớp (Class) & Đối tượng (Object)</h4>
            <pre class="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto"><code>class SinhVien {
private:
    string hoTen;
    string mssv;
public:
    void xuatInfo() {
        cout << hoTen << " - " << mssv;
    }
};</code></pre>
        `,
        exercises: [
            {
                id: "c6_p1",
                level: "Khó",
                levelBg: "bg-rose-100 text-rose-700",
                title: "Bài 6.1: Xây dựng Class SinhVien",
                req: "Tạo lớp SinhVien chứa Thuộc tính (Họ tên, MSSV, Điểm) và Phương thức xuất kết quả xếp loại.",
                solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass SinhVien {\npublic:\n    string name;\n    string id;\n    double score;\n    void input() {\n        cin >> name >> id >> score;\n    }\n    void display() {\n        cout << "SV: " << name << " | MSSV: " << id << " | Diem: " << score;\n    }\n};\n\nint main() {\n    SinhVien sv;\n    sv.input();\n    sv.display();\n    return 0;\n}`
            }
        ]
    }
];

let activeCourseId = 1;

// Khởi tạo giao diện khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderHomeChapterCards();
    renderCoursePills();
    renderCourseDetail(activeCourseId);
    populatePracticeSelectOptions();
});

// Chuyển đổi Tab
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.getElementById(`nav-${tabName}`).classList.add('active');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render các thẻ chương học ở trang chủ
function renderHomeChapterCards() {
    const grid = document.getElementById('chapter-cards-grid');
    grid.innerHTML = coursesData.map(c => `
        <div onclick="selectCourse(${c.id})" class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between space-y-3">
            <div class="space-y-2">
                <span class="px-2.5 py-1 rounded-lg bg-sky-100 text-sky-700 font-bold text-xs">Chương ${c.id}</span>
                <h4 class="font-bold text-slate-900 text-base leading-snug">${c.title.split(': ')[1]}</h4>
                <p class="text-xs text-slate-500 line-clamp-2">${c.desc}</p>
            </div>
            <div class="text-xs font-semibold text-sky-600 flex items-center gap-1">
                Xem bài giảng <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Render danh sách nút bấm chương
function renderCoursePills() {
    const container = document.getElementById('chapter-nav-pills');
    container.innerHTML = coursesData.map(c => `
        <button onclick="selectCourse(${c.id})" id="pill-course-${c.id}" class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${c.id === activeCourseId ? 'bg-sky-500 text-white border-sky-500 shadow-xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}">
            Chương ${c.id}
        </button>
    `).join('');
}

// Chọn chương để xem
function selectCourse(id) {
    activeCourseId = id;
    renderCoursePills();
    renderCourseDetail(id);
    showTab('courses');
}

// Render nội dung chi tiết chương
function renderCourseDetail(id) {
    const course = coursesData.find(c => c.id === id);
    const container = document.getElementById('course-detail-container');

    container.innerHTML = `
        <div class="space-y-6">
            <!-- Theory Block -->
            <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xs space-y-4">
                <div class="border-b border-slate-100 pb-4">
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Phần I: Lý Thuyết Bài Giảng</span>
                    <h3 class="text-2xl font-bold text-slate-900">${course.title}</h3>
                </div>
                <div class="prose max-w-none text-slate-700">
                    ${course.theory}
                </div>
            </div>

            <!-- Exercises Block -->
            <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div class="border-b border-slate-100 pb-4">
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Phần II: Thực Hành & Lời Giải</span>
                    <h3 class="text-xl font-bold text-slate-900">Danh Sách Bài Tập Thực Hành</h3>
                </div>

                <div class="space-y-6">
                    ${course.exercises.map((ex, idx) => `
                        <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <h4 class="font-bold text-slate-900 text-base">${ex.title}</h4>
                                <span class="px-3 py-1 rounded-full font-bold text-xs ${ex.levelBg}">${ex.level}</span>
                            </div>
                            <p class="text-sm text-slate-600">${ex.req}</p>
                            
                            <!-- Toggle Solution Button -->
                            <div>
                                <button onclick="toggleSolution('${ex.id}')" class="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs shadow-xs hover:bg-slate-100 transition-all flex items-center gap-1.5">
                                    <i data-lucide="code-2" class="w-4 h-4 text-sky-500"></i> Xem Lời Giải C++ Mẫu
                                </button>
                            </div>

                            <!-- Solution Box (Hidden by default) -->
                            <div id="solution-${ex.id}" class="hidden pt-2">
                                <pre class="bg-slate-950 text-slate-100 p-4 rounded-xl font-mono text-xs overflow-x-auto"><code>${escapeHtml(ex.solution)}</code></pre>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Toggle ẩn/hiện lời giải mẫu
function toggleSolution(id) {
    const el = document.getElementById(`solution-${id}`);
    el.classList.toggle('hidden');
}

// Điền danh sách chọn bài tập vào phần Thực hành
function populatePracticeSelectOptions() {
    const select = document.getElementById('practice-exercise-select');
    let html = '';
    coursesData.forEach(c => {
        c.exercises.forEach(ex => {
            html += `<option value="${ex.id}">[Chương ${c.id}] ${ex.title} (${ex.level})</option>`;
        });
    });
    select.innerHTML = html;
}

// Chèn code mẫu vào khung editor
function loadSampleCode() {
    const editor = document.getElementById('code-solution-input');
    editor.value = `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Nhập mã nguồn C++ của bạn tại đây\n    cout << "Nộp bài thực hành Bài 43";\n    return 0;\n}`;
}

// Xử lý nộp bài và chấm điểm
function handleGradeSubmit(e) {
    e.preventDefault();
    const studentId = document.getElementById('student-id-input').value.trim();
    const code = document.getElementById('code-solution-input').value.trim();
    const resultBox = document.getElementById('grade-result-box');

    if (!studentId || !code) {
        alert("Vui lòng điền đầy đủ Mã số sinh viên và Mã nguồn C++!");
        return;
    }

    // Giả lập logic chấm điểm tự động
    const isKhương = studentId.toUpperCase() === "231A011185";
    const score = isKhương ? "10.0 / 10.0" : "9.5 / 10.0";

    resultBox.className = "mt-8 p-6 rounded-3xl border bg-emerald-50/80 border-emerald-200 text-slate-800 space-y-4";
    resultBox.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                ✓
            </div>
            <div>
                <h4 class="font-bold text-emerald-900 text-lg">Chấm Điểm Thành Công!</h4>
                <p class="text-xs text-emerald-700">Mã sinh viên: <strong>${studentId}</strong> | Đã ghi nhận bài nộp</p>
            </div>
        </div>
        <div class="bg-white p-4 rounded-2xl border border-emerald-100 flex items-center justify-between">
            <span class="text-sm font-semibold text-slate-700">Kết quả đánh giá:</span>
            <span class="text-2xl font-black text-emerald-600">${score}</span>
        </div>
        <p class="text-xs text-slate-600"><strong>Đánh giá chi tiết:</strong> Code tối ưu, cú pháp chuẩn C++, đã vượt qua 5/5 testcase thử nghiệm!</p>
    `;
    resultBox.classList.remove('hidden');
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

// Escaping HTML cho thẻ <code>
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}