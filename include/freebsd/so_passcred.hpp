#pragma once
#include <string_view>

namespace freebsd {
struct SoPassCredDef {
    static constexpr int opt_name = 0x1025;
    static constexpr std::string_view name = "SO_PASSCRED";
    static constexpr std::string_view desc = "Receive peer process credentials in local domain socket control message";
};
}
