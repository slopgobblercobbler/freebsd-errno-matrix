import json
import os
import unittest

class TestProcVmmap(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_sysctl_kern_proc_vmmap.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_vmmap(self):
        self.assertEqual(self.data['KERN_PROC_VMMAP'], 32)
        self.assertEqual(self.data['KVME_TYPE_VNODE'], 2)

if __name__ == '__main__':
    unittest.main()
