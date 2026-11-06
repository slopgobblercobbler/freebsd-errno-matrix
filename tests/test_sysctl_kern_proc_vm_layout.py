import json
import os
import unittest

class TestProcVmLayout(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_sysctl_kern_proc_vm_layout.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_vm_layout(self):
        self.assertEqual(self.data['KERN_PROC_VM_LAYOUT'], 35)
        self.assertEqual(self.data['VM_LAYOUT_PAGE_SIZE'], 4096)

if __name__ == '__main__':
    unittest.main()
